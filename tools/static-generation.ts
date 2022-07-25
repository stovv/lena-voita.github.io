import matter from 'gray-matter';
import { resolve, join } from 'path';
import { SerializeReturnType } from './types';
import { stat, readFile, readdir } from 'fs/promises';
import { GetStaticProps, GetStaticPropsResult } from 'next/types';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { serialize as mdxSerialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

export const serialize = async <Meta>(slug: string[]): Promise<SerializeReturnType<Meta>> => {
    let mdxPath = resolve('pages', ...slug);

    if (!(await stat(mdxPath + '.mdx').catch(() => false))) {
        mdxPath = resolve(mdxPath, 'index');
    }
    const contentTablePattern = new RegExp(/\<ContentTable\>([\w\W]+)\<\/ContentTable\>/g);
    const markdownWithMeta = await readFile(mdxPath + '.mdx', 'utf-8');

    // eslint-disable-next-line prefer-const
    let { data: meta, content } = matter(markdownWithMeta, {});
    const contentTableParse = contentTablePattern.exec(content);

    if (contentTableParse?.[1]) {
        content = content.replaceAll(contentTablePattern, '');
    }
    const mdxSource = await mdxSerialize(content);

    return {
        meta: {
            ...(JSON.parse(JSON.stringify(meta)) as Meta),
            contentTable: await mdxSerialize(contentTableParse?.[1] ?? ''),
        },
        slug,
        mdxSource,
    };
};

const getFilesFromDirectory = async (directory: string): Promise<string[]> => {
    const files = await readdir(directory, { withFileTypes: true });

    let result: string[] = [];
    for (const file of files) {
        if (file.isDirectory()) {
            result = [...result, ...(await getFilesFromDirectory(join(directory, file.name)))];
            continue;
        }
        result.push(join(directory, file.name));
    }
    return result;
};

export const getMdxFiles = async (page = 'pages'): Promise<string[]> => {
    return (await getFilesFromDirectory(join(page)))
        .filter((item) => item.endsWith('.mdx'))
        .map((item) => item.replace(`${page}/`, ''));
};

export const getStaticPaths: GetStaticPaths = async () => {
    // Server Side function will only start during the assembly of the project
    const files = await getMdxFiles();
    return {
        paths: files
            .filter((file) => file !== 'index.mdx')
            .map((file) => ({
                params: {
                    raw: file,
                    slug: file.replace('index.mdx', '').replace('.mdx', '').split('/'),
                },
            })),
        fallback: false,
    };
};

export const getStaticProps = async <Meta>({
    params,
}: GetStaticPropsContext<{ slug: string[] }>): Promise<GetStaticPropsResult<SerializeReturnType<Meta>>> => {
    // Server Side function will only start during the assembly of the project
    return {
        props: await serialize(params?.slug ?? ['index']),
        revalidate: false,
    };
};

export type TPostPage = {
    slug: string;
    meta: {
        title: string;
        date: string;
        layout?: string;
        description?: string;
        menu?: boolean;
        order?: number;
        paper?: string;
        code?: string;
    };
    published?: boolean;
    preview: MDXRemoteSerializeResult;
};

type TGetStaticPropsForIndex = (folder: string) => GetStaticProps<{ pages: TPostPage[] }>;
export const getStaticPropsForIndex: TGetStaticPropsForIndex = (folder) => async () => {
    // Server Side function will only start during the assembly of the project
    const files = await getMdxFiles(`pages/${folder}`);

    const pages: TPostPage[] = [];
    for (const file of files) {
        const previewPattern = new RegExp(/\<Preview\>([\w\W]+)\<\/Preview\>/g);
        const markdownWithMeta = await readFile(resolve('pages', folder, file), 'utf-8');
        const {
            data: { published = true, ...meta },
            content,
        } = matter(markdownWithMeta);

        // skip not published
        if (!published) continue;

        const preview = previewPattern.exec(content);
        pages.push({
            slug: join(folder, file.replace('.mdx', '')),
            meta: {
                ...(meta as Omit<TPostPage['meta'], 'date'>),
                date: new Date(meta?.date ?? null).toISOString(),
            },
            preview: await mdxSerialize(preview?.[1] ?? ''),
        });
    }

    return {
        props: {
            pages,
        },
        revalidate: false,
    };
};
