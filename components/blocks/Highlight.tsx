import { DetailedHTMLProps, HTMLAttributes } from 'react';

type HighlightProps = {
    color?: 'red' | 'green' | 'gray' | 'accent' | 'bold-gray';
} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
const Highlight = ({ style, color = 'red', ...props }: HighlightProps) => (
    <span
        style={{
            color: `var(--${color})`,
            ...style,
        }}
        {...props}
    />
);

export default Highlight;
