import { cls } from '~/tools';
import styles from './Side.module.css';
import { BaseHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';

type BaseProps = DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type SideContainerProps = {
    reversed?: boolean;
} & BaseProps;
const SideContainer = ({ children, className, reversed, ...props }: SideContainerProps) => (
    <div className={cls([styles.root, [styles.reversed, reversed], className])} {...props}>
        {children}
    </div>
);

type MainProps = {
    lg?: boolean;
    md?: boolean;
    sx?: boolean;
} & BaseProps;
const Main = ({ children, className, lg, md, sx, ...props }: PropsWithChildren<MainProps>) => (
    <div className={cls([styles.main, [styles.lg, lg], [styles.md, md], [styles.sx, sx], className])} {...props}>
        {children}
    </div>
);

type SideProps = BaseProps;
const Side = ({ children, className, ...props }: PropsWithChildren<SideProps>) => (
    <div className={cls([styles.side, className])} {...props}>
        {children}
    </div>
);

SideContainer.Main = Main;
SideContainer.Side = Side;

export default SideContainer;
