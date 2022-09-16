import React, { CSSProperties, PropsWithChildren } from 'react';
import { MDXComponents } from 'mdx/types';
import { MDXRemote as BaseMDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import dynamic from 'next/dynamic';

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
import WithoutGap from '~/components/blocks/WithoutGap';
import Media from '~/components/blocks/Media';
import VerticalDivider from '~/components/blocks/VDivider';
import Spoiler from '~/components/blocks/Spoiler';
import Line from '~/components/blocks/Line';
import CourseBlock from '~/components/blocks/CourseBlock';
import Carousel from '~/components/blocks/Carousel';
import ToBeContinued from '~/components/blocks/ToBeContinued';
import Video from '~/components/blocks/Video';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { BlockMath, InlineMath } from 'react-katex';
import Callout from '~/components/blocks/Callout';
import Quote from '~/components/blocks/Quote';
import Part from '~/components/blocks/Part';
import CourseCarousel from '~/components/blocks/CourseCarousel';
import ExtraHeading from '~/components/blocks/ExtraHeading';

const Quiz = dynamic(() => import('~/components/blocks/Quiz'), {
    ssr: false,
});

const baseComponents: MDXComponents = {
    // image
    img: Image,
    Image,
    Img: Image,

    // Video
    Video,

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

    // NoGap
    Ng: WithoutGap,
    Nr: () => <WithoutGap type={'narrow'} />,
    Wj: () => <WithoutGap type={'wordjoiner'} />,
    NgTab: () => <WithoutGap len={4} />,
    WithoutGap,

    // Simple MediaQueries
    Desktop: (props: PropsWithChildren) => <Media desktop {...props} />,
    Mobile: (props: PropsWithChildren) => <Media mobile {...props} />,

    // Vertical Divider
    Vd: VerticalDivider,
    VerticalDivider,

    // Horizontal Divider,
    Hr: ({ color, style }: { color?: string; style?: CSSProperties }) => (
        <hr style={{ borderColor: color ?? 'var(--yellow)', ...style }} />
    ),

    // Question mark
    Qm: ({ color }: { color?: string }) => (
        <span
            style={{
                backgroundColor: color ?? 'var(--yellow)',
                width: 'min-content',
                height: 'min-content',
                lineHeight: '18px',
                padding: '4px 8px',
                fontSize: '18px',
                fontWeight: 'bold',
            }}>
            ?
        </span>
    ),

    // Spoiler
    details: Spoiler,
    Spoiler,

    // Line
    Line,

    // Course Parts
    CourseBlock,
    CLeft: CourseBlock.Left,
    CRight: CourseBlock.Right,

    // Carousel
    Carousel,

    // To be continued
    ToBeContinued,

    // Common blocks
    BlockMath,
    Math: InlineMath,
    Callout,
    q: Quote,
    blockquote: Quote,
    Quote,
    // Line with divider and heading on top
    Part,
    // Carousel with lightbox
    CourseCarousel,
    // Heading with icon and line
    ExtraHeading,

    // Quiz ( quiz data in /components/blocks/Quiz/data
    Quiz,
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
