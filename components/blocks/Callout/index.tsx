import React, { CSSProperties, PropsWithChildren } from 'react';
import styles from './Callout.module.css';
import Image from '~/components/blocks/Image';
import { cls } from '~/tools';

type TCalloutProps = {
    icon?: string;
    color?: string;
    style: CSSProperties;
    className: string;
};

const Callout = ({ children, icon, color = 'var(--yellow)', style, className }: PropsWithChildren<TCalloutProps>) => (
    <div className={cls([styles.root, className])} style={style}>
        {icon && <Image src={`/nlp-course/ico/${icon}.webp`} className={styles.icon} />}
        <div className={styles.container} style={{ borderColor: color }}>
            {children}
        </div>
    </div>
);

export default Callout;
