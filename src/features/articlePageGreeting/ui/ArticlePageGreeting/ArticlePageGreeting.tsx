import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entity/User';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Modal } from '@/shared/ui/deprecated/Modal';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlesPageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();
  const isMobile = useDevice();

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [dispatch, isArticlesPageWasOpened]);

  const onClose = () => setIsOpen(false);
  const text = <Text title={t('Welcome')} body={t('Welcome to article')} />;

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
});