import styles from './Header.module.css';
import { PropsWithChildren, useState } from 'react';
import { cls } from '~/tools';
import Link from 'next/link';
import config from '~/config';
import { HiMenu, HiX } from 'react-icons/hi';
import { useRouter } from 'next/router';

type HeaderProps = {
    hide?: boolean;
};
const Header = ({ hide }: PropsWithChildren<HeaderProps>) => {
    const router = useRouter();
    const [opened, setOpen] = useState(false);

    return (
        <header className={cls([styles.header, [styles.hidden, hide]])}>
            <div className={styles.wrapper}>
                <Link href={config.header.logo.to}>
                    <a className={styles.logo}>{config.header.logo.title}</a>
                </Link>
                <nav className={cls([styles.navigation, [styles.opened, opened]])}>
                    <ul>
                        {config.header.links.map(({ to, title }) => (
                            <li key={to}>
                                <Link href={to}>
                                    <a className={cls([[styles.active, router.asPath === to]])}>{title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <HiX className={styles.closeIcon} onClick={() => setOpen(false)} />
                </nav>
                <HiMenu className={styles.menuIcon} onClick={() => setOpen(true)} />
            </div>
        </header>
    );
};

export default Header;
