import React, { createContext, CSSProperties, PropsWithChildren, RefObject, useContext, useRef } from 'react';
import { Portal } from '@chakra-ui/portal';

import Card from '~/components/blocks/Card';
import Line from '~/components/blocks/Line';
import SideContainer from '~/components/blocks/Side';
import VerticalDivider, { TVerticalDividerProps } from '~/components/blocks/VDivider';
import styles from './CourseBlock.module.css';

type TCourseBlockProps = {
    id: string;
    left: React.ReactNode;
    divider?: TVerticalDividerProps;
    style?: CSSProperties;
    rect?: boolean;
    isStatic?: boolean;
    color?: string;
};

const CourseBlockContext = createContext<{
    left?: RefObject<HTMLDivElement | null>;
    right?: RefObject<HTMLDivElement | null>;
}>({});

const CourseBlock = ({ children, id, style, divider, rect, isStatic, color }: PropsWithChildren<TCourseBlockProps>) => {
    const left = useRef(null);
    const right = useRef(null);

    return (
        <Card style={{ marginTop: '40px', ...style }} id={id} rect={!!rect} color={color} isStatic={isStatic}>
            <SideContainer md className={styles.root}>
                <SideContainer.Main ref={left} className={styles.left} />
                <SideContainer.Side style={{ justifyContent: 'flex-start' }} className={styles.right}>
                    <Line ref={right} className={styles.line}>
                        <VerticalDivider className={styles.divider} {...divider} />
                    </Line>
                </SideContainer.Side>
                <CourseBlockContext.Provider value={{ left, right }}>{children}</CourseBlockContext.Provider>
            </SideContainer>
        </Card>
    );
};

const Left = ({ children }: PropsWithChildren) => {
    const { left } = useContext(CourseBlockContext);
    return <Portal containerRef={left}>{children}</Portal>;
};
const Right = ({ children }: PropsWithChildren) => {
    const { right } = useContext(CourseBlockContext);
    return <Portal containerRef={right}>{children}</Portal>;
};

CourseBlock.Left = Left;
CourseBlock.Right = Right;

export default CourseBlock;
