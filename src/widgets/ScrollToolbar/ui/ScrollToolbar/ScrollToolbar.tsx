import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';
import { useScrolled } from '@/shared/lib/hooks/useScrolled/useScrolled';

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
  const { className } = props;
  const isScrolled = useScrolled();

  return (
    <VStack
      justify="center"
      align="center"
      max
      className={classNames(cls.scrollToolbar, {}, [className])}
    >
      {isScrolled && <ScrollToTopButton />}
    </VStack>
  );
});
