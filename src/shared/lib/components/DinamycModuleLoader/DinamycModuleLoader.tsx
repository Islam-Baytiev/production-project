import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
}
type ReducerListEntry = [StateSchemaKey, Reducer]
interface DinamycModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}
export const DinamycModuleLoader: FC<DinamycModuleLoaderProps> = (props) => {
  const {
    children, reducers, removeAfterUnmount,
  } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
    }, []);
  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { children }
    </>
  );
};
