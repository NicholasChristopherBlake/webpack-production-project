import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import { Text, TextAlign, TextTheme } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";
import { Loader } from "@/shared/ui/Loader";
import { Avatar } from "@/shared/ui/Avatar";
import { Currency, CurrencySelect } from "@/entity/Currency";
import { Country, CountrySelect } from "@/entity/Country";
import { HStack, VStack } from "@/shared/ui/Stack";
import cls from "./ProfileCard.module.scss";
import { Profile } from "../../model/types/profile";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country?: Country) => void;

}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className, data, isLoading, error,
    onChangeFirstname, onChangeLastname,
    onChangeAge, onChangeCity, onChangeAvatar,
    onChangeUsername, onChangeCurrency, onChangeCountry, readonly,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.profileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.profileCard, {}, [className, cls.error])}
      >
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t('Error happenned during loading')}
          body={t('Try to reload the page')}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap="8" max className={classNames(cls.profileCard, mods, [className])}>
      {data?.avatar && (
      <HStack justify="center" max className={cls.avatarWrapper}>
        <Avatar src={data?.avatar} />
      </HStack>
      )}

      <Input
        value={data?.first}
        placeholder={t('Your name')}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid="ProfileCard.Firstname"
      />
      <Input
        value={data?.lastname}
        placeholder={t('Your lastname')}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid="ProfileCard.Lastname"
      />
      <Input
        value={data?.age}
        placeholder={t('Your age')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('Your city')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Your username')}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Avatar')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};
