import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../../redesigned/Stack';
import cls from './Listbox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import { Button } from '../../../Button';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '../../../Icon';

export interface ListboxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListboxProps<T extends string> {
  items?: ListboxItem<T>[];
  className?: string;
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void; // props must exist
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function Listbox<T extends string>(props: ListboxProps<T>) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom right',
    label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

  const selectedItem = useMemo(
    () => items?.find((item) => item.value === value),
    [items, value],
  );

  return (
    <HStack gap="4">
      {label && (
        <span
          className={classNames(
            cls.label,
            { [cls.labelDisabled]: readonly },
            [],
          )}
        >
          {`${label}>`}
        </span>
      )}
      <HListbox
        disabled={readonly}
        as="div"
        value={value}
        onChange={onChange}
        className={classNames(cls.listbox, {}, [className, popupCls.popup])}
      >
        <HListbox.Button
          addonRight={<Icon Svg={ArrowIcon} />}
          disabled={readonly}
          variant="filled"
          className={cls.trigger}
          as={Button}
        >
          {selectedItem?.content ?? defaultValue}
        </HListbox.Button>

        <HListbox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled,
                    [popupCls.selected]: selected,
                  })}
                >
                  {selected}
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
}
