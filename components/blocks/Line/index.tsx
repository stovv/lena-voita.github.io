import React, { forwardRef, PropsWithChildren } from 'react';
import styles from './Line.module.css';
import { cls } from '~/tools';

type TLineProps = {
    vertical?: boolean;
    horizontal?: boolean;
    responsible?: boolean;
    className?: string;
    reverseOnResponsible?: boolean;
};
// eslint-disable-next-line react/display-name
const Line = forwardRef<HTMLDivElement, PropsWithChildren<TLineProps>>(
    ({ children, className, vertical, horizontal, responsible, reverseOnResponsible, ...props }, ref) => {
        return (
            <div
                className={cls([
                    styles.root,
                    [styles.vertical, vertical],
                    [styles.horizontal, horizontal],
                    [styles.responsible, responsible],
                    [styles.ror, reverseOnResponsible],
                    className,
                ])}
                ref={ref}
                {...props}>
                {children}
            </div>
        );
    },
);

export default Line;
