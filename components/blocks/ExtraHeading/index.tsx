import React, { PropsWithChildren } from 'react';
import Image from '~/components/blocks/Image';
import styles from './ExtraHeading.module.css';

type ExtraHeading = {
    icon: string;
    color: string;
};
const ExtraHeading = ({ icon, color, children }: PropsWithChildren<ExtraHeading>) => (
    <div className={styles.root}>
        <Image src={icon} className={styles.icon} />
        <div className={styles.content}>{children}</div>
        <div className={styles.line} style={{ backgroundColor: color }} />
    </div>
);
export default ExtraHeading;
