import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducerList } from 'shared/lib/components/DinamycModuleLoader/DinamycModuleLoader';

const defaultAsyncReducer:ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducer?:ReducerList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducer={{ ...defaultAsyncReducer, ...asyncReducer }}>
    <StoryComponent />
  </StoreProvider>
);
