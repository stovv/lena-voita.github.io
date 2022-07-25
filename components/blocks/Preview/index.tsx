import { PropsWithChildren } from 'react';
import styles from './Preview.module.css';
import Button from '~/components/blocks/Button';

export type PreviewProps = {
    title?: string;
    paper?: string;
    code?: string;
    link?: string;
    date?: string;
};
const Preview = ({ title, children, paper, link, code, date }: PropsWithChildren<PreviewProps>) => (
    <article>
        <h3 className={styles.heading}>{title}</h3>
        {children}
        <div className={styles.bottom}>
            <div className={styles.buttons}>
                {link && (
                    <Button link={link} icon={'MdKeyboardArrowRight'}>
                        read more
                    </Button>
                )}
                {paper && (
                    <Button link={paper} icon={'MdTextSnippet'}>
                        read paper
                    </Button>
                )}
                {code && (
                    <Button link={code} icon={'MdCode'}>
                        view code
                    </Button>
                )}
            </div>
            {date && (
                <span className={styles.year}>
                    {new Date(date).toLocaleString('en', {
                        month: 'long',
                        year: 'numeric',
                    })}
                </span>
            )}
        </div>
    </article>
);
export default Preview;
