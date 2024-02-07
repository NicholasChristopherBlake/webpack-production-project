import { profileReducer } from "entity/Profile";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicReducerLoader, ReducersList }
  from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('cls.profilePage', {}, [className])}>
        {t('Profile Page')}
      </div>

    </DynamicReducerLoader>
  );
});

export default ProfilePage;
