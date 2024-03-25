import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';

interface RatingCardProps {
   className?: string;
   title?: string;
   feedbackTitle?: string;
   hasFeedback?: boolean;
   onAccept?: (starsCount: number, feedback?: string) => void;
   onCancel?: (starsCount: number) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className, feedbackTitle, hasFeedback, onAccept, onCancel, title,
  } = props;
  const { t } = useTranslation();

  const onSelectStars = useCallback(() => {}, []);

  return (
    <Card className={classNames(cls.ratingCard, {}, [className])}>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>
      <Modal>
        <VStack gap="32" max>
          <Text title={feedbackTitle} />
          <Input placeholder={t('Your feedback')} />
        </VStack>
      </Modal>
    </Card>
  );
});
