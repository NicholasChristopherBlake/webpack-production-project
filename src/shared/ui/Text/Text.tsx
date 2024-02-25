import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

export enum TextSize {
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

  return (
    <div className={classNames(cls.text, {}, adds)}>
      {title && <p className={cls.title}>{title}</p>}
      {body && <p className={cls.body}>{body}</p>}
    </div>
  );
});
