import { EditableProfileCard } from "features/editableProfileCard";
import {
  FC, memo,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { Page } from "widgets/Page/ui/Page";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(({ className }: ProfilePageProps) => {
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation('profile');

  if (!id) {
    return <Text body={t('Profile has not been found')} />;
  }

  return (
    <Page className={classNames('cls.profilePage', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
});

export default ProfilePage;
