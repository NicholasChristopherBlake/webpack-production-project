import { CSSProperties, FC, useMemo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '../../../assets/icons/user-filled-32-32.svg';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

/**
 * Deprecated, use new components from folder redesigned
 * @deprecated
 */
export const Avatar: FC<AvatarProps> = ({
  className,
  src,
  size = 100,
  alt,
  fallbackInverted,
}) => {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const fallback = <Skeleton width={size} height={size} borderRadius="50%" />;
  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      width={size}
      height={size}
      Svg={UserIcon}
    />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      style={styles}
      className={classNames(cls.avatar, mods, [className])}
      alt={alt}
    />
  );
};
