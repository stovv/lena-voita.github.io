import styles from './Footer.module.css';
import config from '~/config';

const Footer = () => {
    return (
        <footer className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.icons}>
                    {config.footer.icons.map((item) => (
                        <a href={item.to} key={item.to}>
                            pic
                        </a>
                    ))}
                </div>
                <p>{config.footer.right}</p>
            </div>
        </footer>
    );
};

export default Footer;
