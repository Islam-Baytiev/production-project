import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

const data = {
  age: 22,
  first: 'asd',
  lastname: 'das',
  country: Country.TURKEY,
  city: 'Grozny',
  currency: Currency.EUR,
  username: 'admin',
};

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('without first name and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('without age', async () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('without country', async () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });
});
