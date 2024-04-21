import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/deprecated/Button';

interface BugButtonProps {
  className?: string;
}

// Component for testing error boundary
export const BugButton: FC<BugButtonProps> = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return <Button onClick={onThrow}>{t('throw error')}</Button>;
};
