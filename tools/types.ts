import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

export type SerializeReturnType<Meta> = {
    meta: Meta;
    slug: string[];
    mdxSource: MDXRemoteSerializeResult;
};
