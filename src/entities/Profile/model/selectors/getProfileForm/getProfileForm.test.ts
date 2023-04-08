import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  const data = {
    age: 22,
    first: 'asd',
    lastname: 'das',
    country: Country.TURKEY,
    city: 'Grozny',
    currency: Currency.EUR,
    username: 'admin',
  };
  test('should return formData', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
});

describe('getProfileForm.test', () => {
  test('should return formData undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
