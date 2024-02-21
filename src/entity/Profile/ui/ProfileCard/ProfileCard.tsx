import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import cls from "./ProfileCard.module.scss";
import { Profile } from "../../model/types/profile";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname: (value?: string) => void;
  onChangeLastname: (value?: string) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className, data, isLoading, error,
    onChangeFirstname, onChangeLastname, readonly,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t('Error happenned during loading')}
          body={t('Try to reload the page')}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Your name')}
          className={cls.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Your lastname')}
          className={cls.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
