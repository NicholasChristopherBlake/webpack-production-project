import {
  ProfileCard, fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, profileReducer,
} from "entity/Profile";
import {
  FC, memo, useCallback, useEffect,
} from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicReducerLoader, ReducersList }
  from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Currency } from "entity/Currency";
import { Country } from "entity/Country";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ValidateProfileError } from "entity/Profile/model/types/profile";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page/ui/Page";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { id } = useParams<{id: string}>();

  const validateErrorTranslation = {
    [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Firstname or lastname is empty'),
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
    [ValidateProfileError.NO_DATA]: t('No data'),
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value: string = '0') => {
    const ageValue = /^\d+$/.test(value) ? Number(value) || 0 : 0;
    dispatch(profileActions.updateProfile({ age: ageValue }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value?: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value?: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames('cls.profilePage', {}, [className])}>
        <VStack gap="16" max>
          <ProfilePageHeader />
          {validateErrors?.length && validateErrors.map((err) => (
            <Text theme={TextTheme.ERROR} body={validateErrorTranslation[err]} key={err} />
          ))}
          <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            readonly={readonly}
            onChangeFirstname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeUsername={onChangeUsername}
            onChangeAvatar={onChangeAvatar}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
          />
        </VStack>
      </Page>
    </DynamicReducerLoader>
  );
});

export default ProfilePage;
