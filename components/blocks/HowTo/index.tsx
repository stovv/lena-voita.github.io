import { PropsWithChildren } from 'react';
import styles from './HowTo.module.css';

type HowToProps = {
    title: string;
};
const HowTo = ({ title, children }: PropsWithChildren<HowToProps>) => (
    <div className={styles.root}>
        <p className={styles.title}>{title}</p>
        <div className={styles.wrapper}>{children}</div>
    </div>
);

export default HowTo;
