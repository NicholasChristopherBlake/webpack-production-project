import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from "entity/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entity/User";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  console.log(canEdit, authData?.id, profileData);

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  console.log(canEdit);

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <div className={cls.btnsWrapper}>
          {readonly
            ? (
              <Button
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
              >
                {t('Edit')}
              </Button>
            ) : (
              <>
                <Button
                  className={cls.editBtn}
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  className={cls.saveBtn}
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSave}
                >
                  {t('Save')}
                </Button>
              </>

            )}
        </div>
      )}
    </div>
  );
};
