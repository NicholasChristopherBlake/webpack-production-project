import {
  FC, memo,
} from "react";
import { useParams } from "react-router-dom";
import { EditableProfileCard } from "@/features/editableProfileCard";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { Page } from "@/widgets/Page";
import { ProfileRating } from "@/features/profileRating";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(({ className }: ProfilePageProps) => {
  const { id } = useParams<{id: string}>();

  if (!id) {
    return null;
  }

  return (
    <Page className={classNames('cls.profilePage', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  );
});

export default ProfilePage;
