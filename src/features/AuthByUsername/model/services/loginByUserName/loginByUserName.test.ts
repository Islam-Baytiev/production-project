import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUserName } from './loginByUserName';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('loginByUserName.test', () => {
/*  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });
  test('fulfilled', async () => {
    const userValue = { username: 'admin', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const action = loginByUserName({ username: 'admin', password: '123' });
    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('reject', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = loginByUserName({ username: 'admin', password: '123' });
    const result = await action(dispatch, getState, undefined);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  }); */
  test('fulfilled', async () => {
    const userValue = { username: 'admin', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUserName);
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('reject', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUserName);
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
