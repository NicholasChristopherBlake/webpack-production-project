import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, TextTheme } from '@/shared/ui/Text';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(
  ({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
      (value: string) => {
        dispatch(loginActions.setUsername(value));
      },
      [dispatch],
    );

    const onChangePassword = useCallback(
      (value: string) => {
        dispatch(loginActions.setPassword(value));
      },
      [dispatch],
    );

    const onLoginClick = useCallback(async () => {
      const result = await dispatch(loginByUsername({ username, password }));
      if (result.meta.requestStatus === 'fulfilled') {
        onSuccess();
      }
    }, [onSuccess, dispatch, username, password]);

    return (
      <DynamicReducerLoader removeAfterUnmount reducers={initialReducers}>
        <div className={classNames(cls.loginForm, {}, [className])}>
          <Text title={t('Authorization form')} />
          {error && (
            <Text body={t('Wrong login or password')} theme={TextTheme.ERROR} />
          )}
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
      </DynamicReducerLoader>
    );
  },
);

export default LoginForm;
