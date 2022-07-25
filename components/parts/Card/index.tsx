import styles from './Card.module.css';
import { BaseHTMLAttributes, DetailedHTMLProps } from 'react';
import { cls } from '~/tools';

type DivProps = DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const Card = ({ children, className, ...props }: DivProps) => (
    <div className={cls([styles.root, className])} {...props}>
        {children}
    </div>
);
export default Card;
