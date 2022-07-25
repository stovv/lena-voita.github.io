import { PropsWithChildren } from 'react';
import styles from './BaseTemplate.module.css';

const BaseTemplate = ({ children }: PropsWithChildren): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default BaseTemplate;
