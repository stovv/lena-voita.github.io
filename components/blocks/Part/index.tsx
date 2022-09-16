import React from 'react';
import VerticalDivider, { TVerticalDividerProps } from '~/components/blocks/VDivider';
import styles from './Part.module.css';

type PartProps = {
    divider?: TVerticalDividerProps;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const Part = ({ children, divider }: PartProps) => {
    return (
        <div className={styles.root}>
            <div>
                <VerticalDivider className={styles.divider} {...divider} />
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default Part;
