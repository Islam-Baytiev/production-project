import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode,
    initialState?: DeepPartial<StateSchema>,
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>,
}
export const StoreProvider = ({ children, initialState, asyncReducer }: StoreProviderProps) => {
  const navigate = useNavigate();

  const store = createReduxStore(
      initialState as StateSchema,
      asyncReducer as ReducersMapObject<StateSchema>,
      navigate,
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
