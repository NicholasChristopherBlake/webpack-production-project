import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'border-round' | 'border-normal';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  fullHeight?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
};

// Memo is not needed because we have children
export const Card = (props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    max,
    fullHeight,
    padding = '8',
    border = 'border-normal',
    ...otherProps
  } = props;

  const paddingClass = mapPaddingToClass[padding];

  return (
    <div
      className={classNames(
        cls.card,
        { [cls.max]: max, [cls.fullHeight]: fullHeight },
        [className, cls[variant], cls[paddingClass], cls[border]],
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
