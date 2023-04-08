import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return profileData', () => {
    const data = {
      age: 22,
      first: 'asd',
      lastname: 'das',
      country: Country.TURKEY,
      city: 'Grozny',
      currency: Currency.EUR,
      username: 'admin',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
});

describe('getProfileData.test', () => {
  test('should return profileDataUndefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
