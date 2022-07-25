import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

import { cls } from '~/tools';
import styles from './Label.module.css';

type LabelProps = {
    green?: boolean;
    yellow?: boolean;
} & Partial<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
const Label = ({ href, children, green, yellow = true, className, ...props }: LabelProps) => (
    <a
        href={href}
        {...props}
        className={cls([
            styles.root,
            [styles.clickable, !!href],
            [styles.yellow, yellow && !green],
            [styles.green, green],
            className,
        ])}>
        {children}
    </a>
);

export default Label;
