import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { User, getUserAuthData } from '@/entity/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
  onEdit: () => void;
}

// TODO - create additional feature ArticleEditButton
// TODO - create additional feature ArticleCreateButton, подумать куда ее поместить
export const ArticleAdditionalInfo = memo(
  (props: ArticleAdditionalInfoProps) => {
    const { className, author, createdAt, views, onEdit } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const canEdit = authData?.id === author.id;

    return (
      <VStack gap="32" className={classNames('', {}, [className])}>
        <HStack gap="8">
          <Avatar src={author.avatar} size={32} />
          <Text body={author.username} bold />
          <Text body={createdAt} />
        </HStack>

        {canEdit && <Button onClick={onEdit}>{t('Edit')}</Button>}
        <Text body={t('viewsWithCount', { count: views })} />
      </VStack>
    );
  },
);
