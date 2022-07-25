import { PropsWithChildren } from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import styles from './Course.module.css';
import ContentTable, { ContentTableLi } from '~/components/blocks/ContentTable';
import MDXRemote from '~/components/parts/MDXRemote';

type PostTemplateProps = {
    contentTable?: MDXRemoteSerializeResult;
};
const CourseTemplate = ({ children, contentTable }: PropsWithChildren<PostTemplateProps>): JSX.Element => {
    return (
        <div className={styles.root}>
            <div className={styles.left}>
                {contentTable && (
                    <ContentTable>
                        <MDXRemote
                            data={contentTable}
                            components={{
                                li: ContentTableLi,
                            }}
                        />
                    </ContentTable>
                )}
            </div>
            <div className={styles.wrapper}>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default CourseTemplate;
