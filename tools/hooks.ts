import { useEffect, useRef } from 'react';

export function useClick<T>(insideClick: () => void, outsideClick: () => void) {
    const ref = useRef<T>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (!ref?.current?.contains?.(event.target)) {
                outsideClick();

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
            } else if (ref?.current?.contains?.(event.target)) {
                insideClick();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return ref;
}
