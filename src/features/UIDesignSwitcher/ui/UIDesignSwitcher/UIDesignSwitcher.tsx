import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entity/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

interface UIDesignSwitcherProps {
  className?: string;
}

export const UIDesignSwitcher = memo((props: UIDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const isAppRedesigned = getFeatureFlag('isAppRedesigned');
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const [isLoading, setIsLoading] = useState(false);
  const forceUpdate = useForceUpdate();

  const items = [
    {
      content: t('New'),
      value: 'new',
    },
    {
      content: t('Old'),
      value: 'old',
    },
  ];

  const onChange = async (value: string) => {
    if (authData) {
      setIsLoading(true);
      await dispatch(
        updateFeatureFlag({
          userId: authData?.id,
          newFeatures: {
            isAppRedesigned: value === 'new', // true if 'new'
          },
        }),
      ).unwrap(); // important to unwrap from promise
      setIsLoading(false);
      forceUpdate();
    }
  };

  return (
    <HStack gap="8">
      <Text body={t('Interface view')} />
      {isLoading ? (
        <Skeleton width={100} height={38} borderRadius="34px" />
      ) : (
        <Listbox
          items={items}
          onChange={onChange}
          value={isAppRedesigned ? 'new' : 'old'}
          className={className}
        />
      )}
    </HStack>
  );
});
