import kebabCase from 'lodash/kebabCase';
import { ReactNode, Children, cloneElement } from 'react';

type ClassNames = ([string | undefined, boolean | null | undefined] | string | undefined | null)[];
export function cls(classNames: ClassNames = []) {
    const classes: string[] = [];
    classNames.forEach((name) => {
        if (Array.isArray(name)) {
            const [className, condition] = name;
            if (className !== undefined && condition) classes.push(className);
        } else classes.push(name || '');
    });

    return classes.join(' ').trim();
}

export function childrenToString(children: ReactNode): string {
    const childrens = Children.toArray(children).reduce(
        (result: string, item: Exclude<ReactNode, boolean | null | undefined>) => {
            if (typeof item === 'string' || typeof item === 'number') {
                result += `${item}`;
                return result;
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const { children } = cloneElement(item).props;
            result += childrenToString(children);
            return result;
        },
        '',
    );
    return kebabCase(childrens);
}
