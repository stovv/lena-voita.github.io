import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import * as Icons from 'react-icons/md';
import styles from './Button.module.css';
import Link from 'next/link';

type ButtonProps = {
    link?: string;
    icon?: keyof typeof Icons;
} & Partial<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
const Button = ({ icon, children, className, link, ...props }: ButtonProps) => {
    const Icon = icon ? Icons[icon] : () => null;
    return (
        <Link href={link ?? '#'}>
            <a className={styles.button}>
                <Icon />
                {children}
            </a>
        </Link>
    );
};

export default Button;
