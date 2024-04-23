import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
  className?: string;
  title?: string;
  body?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  bold?: boolean;

  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

// Not the best solution for semantics, because size and h-tags are not the same
// There must be only one h1 tag on page
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

const mapSizeToClass: Record<TextSize, string> = {
  s: 'size_s',
  m: 'size_m',
  l: 'size_l',
};

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    title,
    body,
    variant = 'primary',
    align = 'left',
    size = 'm',
    bold,
    'data-testid': dataTestId = 'Text',
  } = props;

  const { t } = useTranslation();

  const HeaderTag = mapSizeToHeaderTag[size];
  const sizeClass = mapSizeToClass[size];

  const adds = [className, cls[variant], cls[align], sizeClass];

  return (
    <div className={classNames(cls.text, { [cls.bold]: bold }, adds)}>
      {title && (
        <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
          {title}
        </HeaderTag>
      )}
      {body && (
        <p className={cls.body} data-testid={`${dataTestId}.Paragraph`}>
          {body}
        </p>
      )}
    </div>
  );
});
