import { cls } from '~/tools';
import styles from './Side.module.css';
import { BaseHTMLAttributes, DetailedHTMLProps, forwardRef, PropsWithChildren } from 'react';

type BaseProps = DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type SideContainerProps = {
    reversed?: boolean;
    nowrap?: boolean;
    lg?: boolean;
    md?: boolean;
    sx?: boolean;
    reverseOnResponsible?: boolean;
} & BaseProps;
const SideContainer = ({
    children,
    className,
    reversed,
    nowrap,
    lg,
    md,
    sx,
    reverseOnResponsible,
    ...props
}: SideContainerProps) => (
    <div
        className={cls([
            [styles.reverseOnResponsible, reverseOnResponsible],
            styles.root,
            [styles.reversed, reversed],
            [styles.nowrap, nowrap],
            [styles.lg, lg],
            [styles.md, md],
            [styles.sx, sx],
            className,
        ])}
        {...props}>
        {children}
    </div>
);

type MainProps = {
    lg?: boolean;
    md?: boolean;
    sx?: boolean;
} & BaseProps;
// eslint-disable-next-line react/display-name
const Main = forwardRef<HTMLDivElement, PropsWithChildren<MainProps>>(
    ({ children, className, lg, md, sx, ...props }, ref) => (
        <div
            className={cls([styles.main, [styles.lg, lg], [styles.md, md], [styles.sx, sx], className])}
            ref={ref}
            {...props}>
            {children}
        </div>
    ),
);

type SideProps = BaseProps;
// eslint-disable-next-line react/display-name
const Side = forwardRef<HTMLDivElement, PropsWithChildren<SideProps>>(({ children, className, ...props }, ref) => (
    <div className={cls([styles.side, className])} ref={ref} {...props}>
        {children}
    </div>
));

SideContainer.Main = Main;
SideContainer.Side = Side;

export default SideContainer;
