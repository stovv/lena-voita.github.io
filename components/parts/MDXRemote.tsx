import { PropsWithChildren } from 'react';
import { MDXComponents } from 'mdx/types';
import { MDXRemote as BaseMDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

// config
import config from '~/config';

// components
import Image from '~/components/blocks/Image';
import Label from '~/components/blocks/Label';
import Clarify from '~/components/blocks/Clarify';
import Embedded from '~/components/blocks/Embedded';
import SideContainer from '~/components/blocks/Side';
import Highlight from '~/components/blocks/Highlight';
import ExternalLink from '~/components/blocks/ExternalLink';
import Preview from '~/components/blocks/Preview';
import Publication from '~/components/blocks/Publication';
import ElementWithID from '~/components/blocks/ElementWithID';
import ContentTable from '~/components/blocks/ContentTable';
import Code from '~/components/blocks/Code';
import Card from '~/components/blocks/Card';

const baseComponents: MDXComponents = {
    // image
    img: Image,
    Image,
    Img: Image,

    // side container
    SideContainer,
    Side: SideContainer.Side,
    Main: SideContainer.Main,

    // external link
    Ext: ExternalLink,
    ExternalLink,

    // clarify
    Cl: Clarify,
    Clarify,

    // highlight
    Hl: Highlight,
    Highlight,

    // label
    Lbl: Label,
    Label,

    // embedded (iframe)
    Iframe: Embedded,
    Embedded,

    // preview - need for create preview card
    Preview,
    // publication card
    Publication,

    // headings
    h1: ElementWithID('h2'),
    h2: ElementWithID('h3'),
    h3: ElementWithID('h4'),
    h4: ElementWithID('h5'),
    h5: ElementWithID('h6'),
    h6: ElementWithID('p'),

    // Table of Content
    ContentTable,

    // code
    code: Code,

    // Card
    Card,
};

type MDXRemoteProps = {
    data: MDXRemoteSerializeResult;
    components?: MDXComponents;
};
const MDXRemote = ({ data, components = {} }: PropsWithChildren<MDXRemoteProps>) => {
    return (
        <BaseMDXRemote {...data} scope={{ ...data.scope, config }} components={{ ...baseComponents, ...components }} />
    );
};

export default MDXRemote;
