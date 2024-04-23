import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox as ListboxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/Currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { Listbox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect: FC<CurrencySelectProps> = memo(
  (props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation('profile');

    const currencyOptions = useMemo(
      () =>
        Object.entries(Currency).map((val) => ({
          value: val[0],
          content: val[1],
        })),
      [],
    );

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    const listboxProps = {
      className,
      value,
      defaultValue: t('Choose currency'),
      label: t('Choose currency'),
      items: currencyOptions,
      onChange: onChangeHandler,
      readonly,
      direction: 'top right' as const, // telling TS that this is readonly
    };

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Listbox {...listboxProps} />}
        off={<ListboxDeprecated {...listboxProps} />}
      />
    );
  },
);
