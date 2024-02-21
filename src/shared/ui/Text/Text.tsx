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

interface TextProps {
  className?: string;
  title?: string;
  body?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const {
    className, title, body,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.text, {}, [className, cls[theme], cls[align]])}>
      {title && <p className={cls.title}>{title}</p>}
      {body && <p className={cls.body}>{body}</p>}
    </div>
  );
});
