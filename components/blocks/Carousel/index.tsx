import React, { PropsWithChildren, useCallback, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import styles from './Carousel.module.css';
import Video from '~/components/blocks/Video';
import { cls } from '~/tools';

export type TCarousel = {
    slides: (string | React.ReactNode)[];
    settings?: Partial<Settings>;
    onSlideClick?: (index: number) => void;
    className?: string;
};
const Carousel = ({ slides, settings, onSlideClick, className }: PropsWithChildren<TCarousel>) => {
    const [isSwipe, setSwipe] = useState(false);
    const allSettins: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        ...settings,
    };

    const onClick = useCallback(
        (index: number) => () => {
            if (!isSwipe) {
                onSlideClick?.(index);
            }
        },
        [isSwipe],
    );

    return (
        <div className={cls([styles.root, className])}>
            <Slider
                {...allSettins}
                beforeChange={(...p) => {
                    allSettins?.beforeChange?.(...p);
                    setSwipe(true);
                }}
                afterChange={(...p) => {
                    allSettins?.afterChange?.(...p);
                    setSwipe(false);
                }}>
                {slides.map((slide, index) =>
                    typeof slide === 'string' ? (
                        slide.endsWith('mp4') ? (
                            <Video src={slide} onClick={onClick(index)} />
                        ) : (
                            <img src={slide} key={slide} className={styles.image} onClick={onClick(index)} />
                        )
                    ) : (
                        <div key={index} className={styles.node} onClick={onClick(index)}>
                            {slide}
                        </div>
                    ),
                )}
            </Slider>
        </div>
    );
};

export default Carousel;
