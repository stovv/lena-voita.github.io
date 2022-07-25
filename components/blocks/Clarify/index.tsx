import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { cls } from '~/tools';
import styles from './Clarify.module.css';

type ClarifyProps = {
    size?: 'md' | 'sx';
    comic?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
const Clarify = ({ style, size = 'sx', comic, className, ...props }: ClarifyProps) => (
    <span
        style={{ fontSize: '0.9em', ...style }}
        className={cls([styles?.[size], [styles.comic, comic], className])}
        {...props}
    />
);

export default Clarify;
