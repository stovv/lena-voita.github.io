import React from 'react';

enum NoGaps {
    def = '&nbsp;',
    narrow = '&#8239;',
    wordjoiner = '&#8288;',
}
type TWithoutGapProps = {
    type?: keyof typeof NoGaps;
    len?: number;
};

const WithoutGap: React.FC<TWithoutGapProps> = ({ type = 'def', len = 1 }) => {
    return <span dangerouslySetInnerHTML={{ __html: [...Array(len).keys()].map(() => NoGaps[type]).join('') }} />;
};

export default WithoutGap;
