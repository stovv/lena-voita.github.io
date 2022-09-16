import { Children, DetailedHTMLProps, LiHTMLAttributes, PropsWithChildren, useEffect, useState } from 'react';
import styles from './ContentTable.module.css';
import { useRouter } from 'next/router';
import { childrenToString, cls } from '~/tools';
import { useAppDispatch, useAppSelector } from '~/store';
import { ui } from '~/store/actions';
import kebabCase from 'lodash/kebabCase';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FiAlignLeft, FiArrowLeft } from 'react-icons/fi';

export const ContentTableLi = ({
    children,
    ...props
}: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const toc = useAppSelector(({ ui }) => ui.toc);
    const [opened, setOpened] = useState(true);

    let selected = '/';
    if (router.asPath.includes('#')) {
        selected = router.asPath.split('#')[1];
    }
    const isContainUl = !!Children.toArray(children).find(
        (elem) => typeof elem === 'object' && 'type' in elem && elem?.type === 'ul',
    );

    const link = isContainUl ? kebabCase(`${Children.toArray(children)?.[0]}`) : childrenToString(children);

    useEffect(() => {
        ui.setActiveToc(selected);
    }, [selected]);

    return (
        <li
            className={cls([
                [styles.chapter, isContainUl],
                [styles.active, link === toc || (opened && isContainUl)],
            ])}
            onClick={(event) => {
                event.stopPropagation();
                if (isContainUl) {
                    setOpened(!opened);
                    return;
                }
                dispatch(ui.setActiveToc(link));
            }}
            {...props}>
            {children}
            {isContainUl && <MdKeyboardArrowRight className={styles.chapterIcon} size={24} />}
        </li>
    );
};

const ContentTable = ({ children }: PropsWithChildren) => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <div className={styles.mini}>
                <button className={styles.openButton} onClick={() => setOpened(true)}>
                    <FiAlignLeft size={32} />
                </button>
            </div>
            <div className={cls([styles.root, [styles.opened, opened]])}>
                <button className={styles.closeButton} onClick={() => setOpened(false)}>
                    <FiArrowLeft size={32} />
                </button>
                {children}
            </div>
        </>
    );
};

export default ContentTable;
