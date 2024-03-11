import {
  FC, memo, useCallback, useMemo,
} from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { Listbox } from "shared/ui/Listbox/Listbox";
import { Country } from "../../model/types/Country";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect: FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
  const {
    className, value, onChange, readonly,
  } = props;
  const { t } = useTranslation('profile');

  const countryOptions = useMemo(() => (
    Object.entries(Country).map((val) => ({ value: val[0], content: val[1] }))
  ), []);

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Listbox
      className={classNames('', {}, [className])}
      value={value}
      defaultValue={t('Choose country')}
      label={t('Choose country')}
      items={countryOptions}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top"
    />
  );
});
