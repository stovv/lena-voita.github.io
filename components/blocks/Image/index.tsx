import React, { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react';
import styles from './Image.module.css';
import kebabCase from 'lodash/kebabCase';
import { cls } from '~/tools';
import Lightbox from 'react-image-lightbox';

type ImageProps = {
    mobile?: CSSProperties;
    right?: boolean;
    left?: boolean;
    lightBox?: boolean;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
const Image = ({ mobile, className, left, right, lightBox, ...props }: ImageProps) => {
    const [opened, openLightBox] = useState(false);
    return (
        <>
            <style jsx>{`
                @media screen and (max-width: 380px) {
                    .image {
                        ${Object.entries(mobile ?? {})
                            .map(([key, value]) => `${kebabCase(key)}:${value}!important;`)
                            .join('\n')}
                    }
                }
            `}</style>
            <img
                {...props}
                onClick={() => {
                    if (lightBox) {
                        openLightBox(true);
                    }
                }}
                className={'image' + ' ' + cls([styles.image, [styles.left, left], [styles.right, right], className])}
            />

            {lightBox && opened && <Lightbox mainSrc={props?.src ?? ''} onCloseRequest={() => openLightBox(false)} />}
        </>
    );
};

export default Image;
