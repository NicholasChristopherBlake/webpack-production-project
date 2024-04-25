import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
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
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';

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
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <VStack
              gap="8"
              className={classNames(cls.loginForm, {}, [className])}
            >
              <Text title={t('Authorization form')} />
              {error && (
                <Text body={t('Wrong login or password')} variant="error" />
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
                onClick={onLoginClick}
                disabled={isLoading}
              >
                {t('Sign Up')}
              </Button>
            </VStack>
          }
          off={
            <div className={classNames(cls.loginForm, {}, [className])}>
              <TextDeprecated title={t('Authorization form')} />
              {error && (
                <TextDeprecated
                  body={t('Wrong login or password')}
                  theme={TextTheme.ERROR}
                />
              )}
              <InputDeprecated
                placeholder={t('Enter username')}
                className={cls.input}
                autofocus
                type="text"
                onChange={onChangeUsername}
                value={username}
              />
              <InputDeprecated
                placeholder={t('Enter password')}
                className={cls.input}
                type="text"
                onChange={onChangePassword}
                value={password}
              />
              <ButtonDeprecated
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
              >
                {t('Sign Up')}
              </ButtonDeprecated>
            </div>
          }
        />
      </DynamicReducerLoader>
    );
  },
);

export default LoginForm;
