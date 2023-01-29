import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './CounterSlice';

describe('CounterSlice.test', () => {
  test('decrement', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({ value: 9 });
  });
});

describe('CounterSlice.test', () => {
  test('increment', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 11 });
  });
});

describe('should work with empty state', () => {
  test('increment', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
