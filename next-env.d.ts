/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

declare module 'react-awesome-lightbox' {
    import React from 'react';
    type Slide = {
        url: string;
        title: string;
    };

    const Lightbox: React.FC<{
        images: Slide[];
        title?: string;
        zoomStep?: number;
        allowZoom?: boolean;
        startIndex?: number;
        showTitle?: boolean;
        onClose?: () => void;
        allowReset?: boolean;
        allowRotate?: boolean;
        doubleClickZoom?: number;
        onNavigateImage?: (newIndex: number) => void;
        buttonAlign?: 'flex-end' | 'flex-start' | 'center';
    }>;
    export = Lightbox;
}
