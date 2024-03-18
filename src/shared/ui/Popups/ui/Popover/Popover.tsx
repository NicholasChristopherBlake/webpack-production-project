import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react'; // to remove collision with our component's name
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
   className?: string;
   trigger?: ReactNode;
   direction?: DropdownDirection;
   children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const {
    className, children, trigger, direction = 'bottom right',
  } = props;
  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover
      className={classNames(cls.popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button className={popupCls.trigger} as="div">
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(cls.panel, {}, menuClasses)}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}
