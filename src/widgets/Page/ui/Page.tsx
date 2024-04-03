import {
  MutableRefObject,
  ReactNode,
  UIEvent,
  useLayoutEffect,
  useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSaveScrollByPath, scrollSaveActions } from '@/features/ScrollSave';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/tests';

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

// No need for memo - using children
export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd, 'data-testid': dataTestId } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getSaveScrollByPath(state, pathname),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  // Instead of useInitialEffect before FIRST render, so it doesn't jump from top
  useLayoutEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      }),
    );
  }, 200);

  return (
    <main
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
      onScroll={onScroll}
      data-testid={dataTestId ?? 'Page'}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  );
};
