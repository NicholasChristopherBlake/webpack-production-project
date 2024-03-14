import { Currency } from "entity/Currency";
import { Country } from "entity/Country";
import { profileActions, profileReducer } from "./profileSlice";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import {
  ProfileSchema, ValidateProfileError,
} from "../types/editableProfileCardSchema";

const data = {
  username: 'admin',
  age: 25,
  country: Country.France,
  lastname: 'Morgan',
  first: 'Nick',
  city: 'Provance',
  currency: Currency.EUR,
};
describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    ))
      .toEqual({ readonly: true });
  });
  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    ))
      .toEqual({
        readonly: true,
        validateErrors: undefined,
        data,
        form: data,
      });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({
        username: '123456',
      }),
    ))
      .toEqual({
        form: {
          username: '123456',
        },
      });
  });

  test('test update profile service pending (extraReducer)', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    ))
      .toEqual({
        isLoading: true,
        validateErrors: undefined,
      });
  });

  test('test update profile service fulfilled (extraReducer)', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    ))
      .toEqual({
        isLoading: false,
        readonly: true,
        validateErrors: undefined,
        form: data,
        data,
      });
  });
});
