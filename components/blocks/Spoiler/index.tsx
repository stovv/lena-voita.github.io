import React, { CSSProperties, PropsWithChildren } from 'react';
import styles from './Spoiler.module.css';

type TSpoilerProps = {
    title?: string;
    defaultOpened?: boolean;
    style?: CSSProperties;
    titleStyle?: CSSProperties;
    background?: string;
};

const Spoiler = ({
    children,
    title,
    titleStyle,
    defaultOpened = false,
    background = 'var(--light-yellow)',
    style,
    ...props
}: PropsWithChildren<TSpoilerProps>) => {
    return (
        <details className={styles.root} style={{ backgroundColor: background, ...style }} {...props}>
            <summary className={styles.title} style={titleStyle}>
                {title}
            </summary>
            <div className={styles.content}>{children}</div>
        </details>
    );
};

export default Spoiler;
