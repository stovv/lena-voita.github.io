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
