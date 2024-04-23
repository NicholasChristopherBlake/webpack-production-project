import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox as ListboxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/Country';
import { ToggleFeatures } from '@/shared/lib/features';
import { Listbox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect: FC<CountrySelectProps> = memo(
  (props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation('profile');

    const countryOptions = useMemo(
      () =>
        Object.entries(Country).map((val) => ({
          value: val[0],
          content: val[1],
        })),
      [],
    );

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    const listboxProps = {
      className,
      value,
      defaultValue: t('Choose country'),
      label: t('Choose country'),
      items: countryOptions,
      onChange: onChangeHandler,
      readonly,
      direction: 'top right' as const,
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
