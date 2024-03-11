import {
  FC, memo, useCallback, useMemo,
} from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { Listbox } from "shared/ui/Listbox/Listbox";
import { Currency } from "../../model/types/Currency";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect: FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
  const {
    className, value, onChange, readonly,
  } = props;
  const { t } = useTranslation('profile');

  const currencyOptions = useMemo(() => (
    Object.entries(Currency).map((val) => ({ value: val[0], content: val[1] }))
  ), []);

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Listbox
      className={classNames('', {}, [className])}
      value={value}
      defaultValue={t('Choose currency')}
      label={t('Choose currency')}
      items={currencyOptions}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top right"
    />
  );
});
