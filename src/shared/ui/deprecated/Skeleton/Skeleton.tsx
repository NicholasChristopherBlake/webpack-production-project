import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

/**
 * Deprecated, use new components from folder redesigned
 * @deprecated
 */
export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, borderRadius } = props;
  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return (
    <div style={styles} className={classNames(cls.skeleton, {}, [className])} />
  );
});
