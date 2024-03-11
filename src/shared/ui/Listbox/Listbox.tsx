import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';
import cls from './Listbox.module.scss';

export interface ListboxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface ListboxProps {
  items?: ListboxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void; // props must exist
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  top: cls.optionsTop,
  bottom: cls.optionsBottom,
};

export function Listbox(props: ListboxProps) {
  const {
    className, items, value, defaultValue, onChange, readonly,
    direction = 'bottom', label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="4">
      {label && (
      <span className={classNames('', { [cls.labelDisabled]: readonly }, [])}>
        {`${label}>`}
      </span>
      )}
      <HListbox
        disabled={readonly}
        as="div"
        value={value}
        onChange={onChange}
        className={classNames(cls.listbox, {}, [className])}
      >

        <HListbox.Button className={cls.trigger} as="div">
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListbox.Button>

        <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li className={classNames(cls.item, {
                  [cls.active]: active,
                  [cls.disabled]: item.disabled,
                })}
                >
                  {selected && (<span>&#10004;</span>)}
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
