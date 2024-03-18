import { StateSchema } from "@/app/providers/StoreProvider";
import { Currency } from "@/entity/Currency";
import { Country } from "@/entity/Country";
import { getProfileData } from "./getProfileData";

describe('getProfileData.test', () => {
  test('should return correct state', () => {
    const data = {
      username: 'admin',
      age: 25,
      country: Country.France,
      lastname: 'Morgan',
      first: 'Nick',
      city: 'Provance',
      currency: Currency.EUR,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
