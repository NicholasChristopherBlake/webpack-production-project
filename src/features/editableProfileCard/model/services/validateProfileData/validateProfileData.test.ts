import { Country } from '@/entity/Country';
import { Currency } from '@/entity/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from "../../consts/consts";

const data = {
  username: 'admin',
  age: 25,
  country: Country.France,
  lastname: 'Morgan',
  first: 'Nick',
  city: 'Provance',
  currency: Currency.EUR,
};

describe('validateProfileData.test', () => {
  test('no validation errors', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without firstname and lastname', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
  test('incorrect country', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
