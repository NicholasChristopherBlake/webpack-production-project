import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input placeholder={t('Enter username')} className={cls.input} autofocus type="text" />
      <Input placeholder={t('Enter password')} className={cls.input} type="text" />
      <Button className={cls.loginBtn}>
        {t('Sign Up')}
      </Button>
    </div>
  );
};
