import { PropsWithChildren } from 'react';
import Base from './base';

const HighlightedTemplate = ({ children }: PropsWithChildren): JSX.Element => {
    return (
        <>
            <style jsx global>{`
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    color: var(--dark-blue);
                }
            `}</style>
            <Base>{children}</Base>
        </>
    );
};

export default HighlightedTemplate;
