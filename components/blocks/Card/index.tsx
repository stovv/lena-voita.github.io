import React, { AnchorHTMLAttributes, BaseHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './Card.module.css';
import { cls } from '~/tools';

type TCardProps = {
    rect?: boolean;
    color?: string;
    href?: string;
    isStatic?: boolean;
    right?: React.ReactNode;
} & (
    | DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>
    | DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
);
const Card: React.FC<TCardProps> = ({ children, href, right, className, style, isStatic, rect, color, ...props }) => {
    const Elem = href ? 'a' : 'div';
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Elem
            href={href}
            className={cls([
                styles.root,
                [styles.rect, rect],
                [styles.link, !!href],
                [styles.static, isStatic],
                className,
            ])}
            style={{
                boxShadow: !!color ? `0 3px 6px ${color}, 0 1px 1px ${color}` : 'unset',
                ...style,
            }}
            {...props}>
            {children}
            {right && <div className={styles.right}>{right}</div>}
        </Elem>
    );
};
export default Card;
