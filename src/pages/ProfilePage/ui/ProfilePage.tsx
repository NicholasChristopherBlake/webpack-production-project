import { ProfileCard, fetchProfileData, profileReducer } from "entity/Profile";
import { FC, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicReducerLoader, ReducersList }
  from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('cls.profilePage', {}, [className])}>
        <ProfileCard />
      </div>

    </DynamicReducerLoader>
  );
});

export default ProfilePage;
