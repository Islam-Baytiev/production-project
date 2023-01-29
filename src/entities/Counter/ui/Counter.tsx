import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

interface CounterProps {

}
export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="titleValue">{counterValue}</h1>
      <Button onClick={increment} data-testid="incrementBtn">
        {t('increment')}
      </Button>
      <Button onClick={decrement} data-testid="decrementBtn">
        {t('decrement')}
      </Button>
    </div>
  );
};
