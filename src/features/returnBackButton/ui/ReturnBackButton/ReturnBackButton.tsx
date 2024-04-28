import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReturnBackButton.module.scss';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ReturnBackButtonProps {
  className?: string;
}

export const ReturnBackButton = memo((props: ReturnBackButtonProps) => {
  const { className } = props;
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <Icon
      Svg={CircleIcon}
      clickable
      onClick={onClick}
      width={32}
      height={32}
      className={classNames(cls.returnBackButton, {}, [className])}
    />
  );
});
