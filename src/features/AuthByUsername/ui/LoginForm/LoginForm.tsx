import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(
    () => {
      dispatch(loginByUsername({ username, password }));
    },
    [dispatch, username, password],
  );

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('Authorization form')} />
      {error && <Text body={t('Wrong login or password')} theme={TextTheme.ERROR} />}
      <Input
        placeholder={t('Enter username')}
        className={cls.input}
        autofocus
        type="text"
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t('Enter password')}
        className={cls.input}
        type="text"
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Sign Up')}
      </Button>
    </div>
  );
});

export default LoginForm;
