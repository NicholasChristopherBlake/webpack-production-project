import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  max?: boolean;
}

// Memo is not needed because we have children
/**
 * Deprecated, use new components from folder redesigned
 * @deprecated
 */
export const Card = (props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    max,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.card, { [cls.max]: max }, [
        className,
        cls[theme],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
