import React from 'react';
import styles from './Quote.module.css';
import { cls } from '~/tools';

const Quote = ({
    className,
    ...props
}: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) => (
    <div className={cls([styles.root, className])}>
        <div className={styles.wrapper}>
            <q {...props} />
        </div>
    </div>
);

export default Quote;
