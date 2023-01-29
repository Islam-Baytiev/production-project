import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/conponentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
  test('test', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('titleValue')).toHaveTextContent('10');
  });
  test('incrementBtn', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId('incrementBtn'));
    expect(screen.getByTestId('titleValue')).toHaveTextContent('11');
  });
  test('decrementBtn', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId('decrementBtn'));
    expect(screen.getByTestId('titleValue')).toHaveTextContent('9');
  });
});
