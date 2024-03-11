import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string;
  title?: string;
  body?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

// Not the best solution for semantics, because size and h-tags are not the same
// There must be only one h1 tag on page
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const {
    className, title, body,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const { t } = useTranslation();

  const adds = [
    className,
    cls[theme],
    cls[align],
    cls[size],
  ];

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(cls.text, {}, adds)}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {body && <p className={cls.body}>{body}</p>}
    </div>
  );
});
