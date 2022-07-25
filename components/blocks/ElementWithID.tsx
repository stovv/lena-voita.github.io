import { childrenToString } from '~/tools';

type ElementType<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T];
const ElementWithID = (Tag: keyof JSX.IntrinsicElements) => {
    // eslint-disable-next-line react/display-name
    return ({ children, ...props }: ElementType<typeof Tag>) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Tag id={`${childrenToString(children)}`.toLowerCase()} {...props}>
            {children}
        </Tag>
    );
};

export default ElementWithID;
