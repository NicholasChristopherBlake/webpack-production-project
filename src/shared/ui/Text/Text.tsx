import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  body?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = (props) => {
  const {
    className, title, body, theme = TextTheme.PRIMARY,
  } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.text, {}, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {body && <p className={cls.body}>{body}</p>}
    </div>
  );
};
