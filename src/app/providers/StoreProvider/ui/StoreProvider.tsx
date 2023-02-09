import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode,
    initialState?: DeepPartial<StateSchema>,
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
}
export const StoreProvider = ({ children, initialState, asyncReducer }: StoreProviderProps) => {
  const store = createReduxStore(
      initialState as StateSchema,
      asyncReducer as ReducersMapObject<StateSchema>,
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
