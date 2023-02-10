import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginError.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginLoading(state as StateSchema)).toEqual(true);
  });
});

describe('getLoginError.test', () => {
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginLoading(state as StateSchema)).toEqual(false);
  });
});
