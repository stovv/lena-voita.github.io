import PageTemplate from '~/components/parts/PageTemplate';
import { NextPage } from 'next';
import BaseTemplate from '~/layouts/base';
import Card from '~/components/parts/Card';
import Preview from '~/components/blocks/Preview';
import MDXRemote from '~/components/parts/MDXRemote';
import { getStaticPropsForIndex, TPostPage } from '~/tools/static-generation';

type PostsProps = {
    pages: TPostPage[];
};
const NlpCourse: NextPage<PostsProps> = ({ pages }) => {
    return (
        <PageTemplate>
            <BaseTemplate>
                {pages
                    .sort((a, b) => (a.meta?.order ?? 100) - (b?.meta?.order ?? 100))
                    .map((page) => (
                        <Card key={page.slug} style={{ marginBottom: '20px' }}>
                            <Preview title={page.meta.title} date={page.meta.date}>
                                <MDXRemote data={page.preview} />
                            </Preview>
                        </Card>
                    ))}
            </BaseTemplate>
        </PageTemplate>
    );
};

export const getStaticProps = getStaticPropsForIndex('nlp-course');
export default NlpCourse;
