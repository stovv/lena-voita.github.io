import * as React from 'react';
import { cls } from '~/tools';
import styles from './MediaQuery.module.css';

type TMediaQueryProps = {
    mobile?: boolean;
    desktop?: boolean;
};
const MediaQuery: React.FC<TMediaQueryProps> = ({ desktop = true, mobile, ...props }) => {
    return (
        <div
            className={cls([
                [styles.desktop, desktop],
                [styles.mobile, mobile],
            ])}
            {...props}
        />
    );
};

export default MediaQuery;
