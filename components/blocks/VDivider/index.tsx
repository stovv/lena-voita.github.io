import React, { CSSProperties } from 'react';
import { cls } from '~/tools';
import Image from '~/components/blocks/Image';

import styles from './VDivider.module.css';

export type TVerticalDividerProps = {
    topImage?: string;
    botImage?: string;
    topImageStyle?: CSSProperties;
    botImageStyle?: CSSProperties;
    color?: string;
    horizontal?: boolean;
    className?: string;
};
export const VerticalDivider: React.FC<TVerticalDividerProps> = ({
    topImage,
    botImage,
    color = 'var(--green)',
    horizontal,
    className,
    topImageStyle,
    botImageStyle,
    ...props
}) => {
    return (
        <div className={cls([[styles.horizontal, horizontal], styles.root, className])} {...props}>
            {topImage ? (
                <Image src={topImage} className={styles.image} style={topImageStyle} />
            ) : (
                <div className={styles.circle} style={{ backgroundColor: color }} />
            )}
            <div style={{ backgroundColor: color }} className={styles.line} />

            {botImage ? (
                <Image src={botImage} className={styles.image} style={botImageStyle} />
            ) : (
                <div className={styles.circle} style={{ backgroundColor: color }} />
            )}
        </div>
    );
};

export default VerticalDivider;
