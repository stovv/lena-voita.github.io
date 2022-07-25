import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import styles from './Image.module.css';

type ImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
const Image = (props: ImageProps) => {
    return <img {...props} className={styles.image} />;
};

export default Image;
