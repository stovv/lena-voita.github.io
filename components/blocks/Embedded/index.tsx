// https://www.npmjs.com/package/react-iframe
import Iframe from 'react-iframe';

import styles from './Embedded.module.css';
import { IIframe } from 'react-iframe/types';
import { cls } from '~/tools';
import { CSSProperties } from 'react';

type EmbeddedTypes = 'youtube' | 'soundcloud';
const EmbeddedTypes: {
    [key in EmbeddedTypes]: Partial<IIframe>;
} = {
    youtube: {
        width: '300',
        height: '160',
        frameBorder: 0,
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowFullScreen: true,
    },
    soundcloud: {
        width: '100%',
        height: '170',
        scrolling: 'no',
        frameBorder: 0,
        allow: 'autoplay',
    },
};

type EmbeddedProps = {
    url: string;
    type: EmbeddedTypes;
    style?: CSSProperties;
} & Partial<IIframe>;
const Embedded = ({ type, className, style, ...props }: EmbeddedProps) => (
    <div style={style}>
        <Iframe className={cls([styles.root, className])} {...EmbeddedTypes[type]} {...props} />
    </div>
);

export default Embedded;
