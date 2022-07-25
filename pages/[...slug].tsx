import type { NextPage } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

// tools
import { SerializeReturnType } from 'tools/types';
export { getStaticProps, getStaticPaths } from 'tools/static-generation';

// layouts
import * as Layouts from '~/layouts';

// parts
import MDXRemote from '~/components/parts/MDXRemote';
import PageTemplate from '~/components/parts/PageTemplate';

type CoursePageProps = SerializeReturnType<{
    layout?: keyof typeof Layouts;
    header?: boolean;
    title?: string;
    date?: string;
    description?: string;
    contentTable?: MDXRemoteSerializeResult;
}>;

// Page resolver
const Page: NextPage<CoursePageProps> = ({ meta, mdxSource }) => {
    const { layout = 'base', header = true } = meta;
    const Layout = Object.keys(Layouts).includes(layout) ? Layouts[layout] : Layouts['base'];
    return (
        <PageTemplate hideHeader={!header}>
            <Layout {...meta}>
                <MDXRemote data={mdxSource} />
            </Layout>
        </PageTemplate>
    );
};

export default Page;
