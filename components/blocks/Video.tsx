import React from 'react';

export type VideoProps = {
    src: string;
} & React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
const Video = ({ src, style, ...props }: VideoProps) => (
    <video height='auto' loop autoPlay muted style={{ width: '100%', ...style }} {...props}>
        <source src={src} type='video/mp4' />
    </video>
);

export default Video;
