import {
  profileActions, profileReducer, ProfileSchema, updateProfileData, ValidateProfileError,
} from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const data = {
  age: 22,
  first: 'asd',
  lastname: 'das',
  country: Country.TURKEY,
  city: 'Grozny',
  currency: Currency.EUR,
  username: 'admin',
};

describe('profileSlice.test', () => {
  test('test setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
    state as ProfileSchema,
    profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit(),
    )).toEqual({
      readonly: true, validateError: undefined, data, form: data,
    });
  });

  test('test pending service', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test('test fulfilled service', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateError: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
