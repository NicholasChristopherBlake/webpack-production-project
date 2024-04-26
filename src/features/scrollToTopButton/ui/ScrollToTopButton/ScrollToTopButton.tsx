import { memo } from 'react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props;

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // TODO показывать кнопку только тогда, когда пользователь проскроллил вниз. сделать хук
  return (
    <Icon
      Svg={CircleIcon}
      clickable
      onClick={onClick}
      width={32}
      height={32}
      className={className}
    />
  );
});
