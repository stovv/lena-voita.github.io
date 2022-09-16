import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

import styles from './CourseCarousel.module.css';
import Carousel from '~/components/blocks/Carousel';

type TCourseCarouselProps = {
    slides: {
        url: string;
        title: string;
    }[];
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const CourseCarousel = ({ style, className, slides, ...props }: TCourseCarouselProps) => {
    const [opened, setOpened] = useState(false);
    const [index, setSlideIndex] = useState(0);

    return (
        <div style={style} className={styles.root}>
            <Carousel
                className={styles.carousel}
                slides={slides.map(({ url }) => url)}
                settings={{ arrows: true, swipe: true }}
                onSlideClick={(index: number) => {
                    setOpened(true);
                    setSlideIndex(index);
                }}
            />
            {opened && (
                <Lightbox
                    mainSrc={slides[index].url}
                    nextSrc={slides[(index + 1) % slides.length].url}
                    prevSrc={slides[(index + slides.length - 1) % slides.length].url}
                    onCloseRequest={() => setOpened(false)}
                    onMovePrevRequest={() => setSlideIndex((index + slides.length - 1) % slides.length)}
                    onMoveNextRequest={() => setSlideIndex((index + 1) % slides.length)}
                />
            )}
        </div>
    );
};

export default CourseCarousel;
// TODO
