// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { HighCode } from 'react-highlight-code';
import { PropsWithChildren } from 'react';

type CodeProps = {
    lang?: string;
    className?: string;
};
// https://highlightjs.readthedocs.io/en/latest/supported-languages.html
const Code = ({ children, lang, className, ...props }: PropsWithChildren<CodeProps>) => {
    const Lang = lang ?? className?.replace?.('language-', '') ?? '';
    return <HighCode codeValue={children} lang={Lang} langName={''} width={'100%'} />;
};

export default Code;
