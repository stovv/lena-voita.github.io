import Link from 'next/link';
import { CSSProperties, PropsWithChildren } from 'react';
import Card from '~/components/parts/Card';
import styles from './Publication.module.css';
import { Paper } from '~/config/papers';
import ExternalLink from '~/components/blocks/ExternalLink';

const PublicationCard = ({
    children,
    image,
    authors,
    links,
    conf,
    to,
    style,
}: PropsWithChildren<Paper & { style: CSSProperties }>) => {
    const imageElem = <img className={styles.image} src={image} width={180} height={163} />;
    return (
        <Card style={style}>
            <article className={styles.root}>
                {image &&
                    (to ? (
                        <ExternalLink href={to} className={styles.to}>
                            {imageElem}
                        </ExternalLink>
                    ) : (
                        imageElem
                    ))}
                <div className={styles.content}>
                    <div className={styles.top}>
                        <h1>{children}</h1>
                        <p>
                            {authors.map((author) =>
                                author.includes('Voita') ? (
                                    <>
                                        <u>{author}</u>,{' '}
                                    </>
                                ) : (
                                    author
                                ),
                            )}
                        </p>
                        <hr />
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.links}>
                            {links?.map(({ title, to }) => (
                                <Link href={to} key={title}>
                                    <a>{title}</a>
                                </Link>
                            ))}
                        </div>
                        <p>
                            {conf?.name ?? ''} {conf?.year ?? ''}
                        </p>
                    </div>
                </div>
            </article>
        </Card>
    );
};
export default PublicationCard;
