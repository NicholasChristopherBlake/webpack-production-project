import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entity/Rating';
import { getUserAuthData } from '@/entity/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi';

export interface ProfileRatingProps {
   className?: string;
   profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
  const { className, profileId } = props;
  const { t } = useTranslation('profile');
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetProfileRating(
    {
      profileId,
      userId: userData?.id ?? '',
    },
  );
  const [rateProfileMutation] = useRateProfile();

  const rating = data?.[0];

  const handleRateProfile = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateProfileMutation({
        userId: userData?.id ?? '',
        profileId,
        rate: starsCount,
        feedback,
      });
    } catch (e) {
      // handle error
      console.log(e);
    }
  }, [profileId, rateProfileMutation, userData?.id]);

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateProfile(starsCount, feedback);
  }, [handleRateProfile]);

  const onCancel = useCallback((starsCount: number) => {
    handleRateProfile(starsCount);
  }, [handleRateProfile]);

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      className={className}
      title={t('Rate this profile')}
      feedbackTitle={
         t('Send profile feedback')
      }
      hasFeedback
    />
  );
});

export default ProfileRating;
