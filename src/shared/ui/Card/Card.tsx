import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
   className?: string;
   children: ReactNode;
}

// Memo is not needed because we have children
export const Card = (props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={classNames(cls.card, {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
