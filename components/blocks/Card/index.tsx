import styles from './Card.module.css';
import { BaseHTMLAttributes, DetailedHTMLProps } from 'react';
import { cls } from '~/tools';

const Card = ({
    children,
    className,
    ...props
}: DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div className={cls([styles.root, className])} {...props}>
            {children}
        </div>
    );
};
export default Card;
