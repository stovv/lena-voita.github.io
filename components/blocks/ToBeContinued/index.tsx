import React from 'react';
import Image from '~/components/blocks/Image';
import styles from './ToBeContinues.module.css';
import { cls } from '~/tools';

type TToBeContinued = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const ToBeContinued = ({ className, ...props }: TToBeContinued) => (
    <div className={cls([styles.root, className])} {...props}>
        <p className={styles.text}>To be continued...</p>
        <Image src={'/nlp-course/main/preview/typing.gif'} className={styles.image} />
    </div>
);

export default ToBeContinued;
