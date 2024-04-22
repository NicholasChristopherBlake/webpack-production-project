import { FC, ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';
import { Portal } from '../../redesigned/Portal/Portal';
import { Overlay } from '../../redesigned/Overlay/Overlay';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

/**
 * Deprecated, use new components from folder redesigned
 * @deprecated
 */
export const Modal: FC<ModalProps> = (props: ModalProps) => {
  const { children, className, isOpen, onClose, lazy } = props;
  const { close, isClosing, isMounted } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  });

  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
