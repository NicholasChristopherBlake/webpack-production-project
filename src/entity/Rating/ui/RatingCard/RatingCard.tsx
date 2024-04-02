import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
   className?: string;
   title?: string;
   feedbackTitle?: string;
   hasFeedback?: boolean;
   onAccept?: (starsCount: number, feedback?: string) => void;
   onCancel?: (starsCount: number) => void;
   rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className, feedbackTitle, hasFeedback, onAccept, onCancel,
    rate = 0,
    title,
  } = props;
  const { t } = useTranslation();
  const isMobile = useDevice();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');
  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        data-testid="RatingCard.Input"
        placeholder={t('Your feedback')}
        value={feedback}
        onChange={setFeedback}
      />
    </>
  );

  return (
    <Card max className={className} data-testid="RatingCard">
      <VStack align="center" gap="8" max>
        <Text title={starsCount ? t('Thank you for the rating') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      {isMobile
        ? (
          <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
            <VStack gap="32">
              {modalContent}
              <Button
                data-testid="RatingCard.Send"
                fullWidth
                onClick={acceptHandle}
                size={ButtonSize.L}
              >
                {t('Send')}
              </Button>
            </VStack>
          </Drawer>
        )
        : (
          <Modal isOpen={isModalOpen} lazy>
            <VStack gap="32" max>
              {modalContent}
              <HStack max gap="16" justify="end">
                <Button
                  data-testid="RatingCard.Close"
                  onClick={cancelHandle}
                  theme={ButtonTheme.OUTLINE_RED}
                >
                  {t('Close')}
                </Button>
                <Button
                  data-testid="RatingCard.Send"
                  onClick={acceptHandle}
                >
                  {t('Send')}
                </Button>
              </HStack>
            </VStack>
          </Modal>
        )}
    </Card>
  );
});
