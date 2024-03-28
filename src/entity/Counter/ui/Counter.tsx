import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button";
import { useCounterActions } from "../model/slice/counterSlice";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useCounterValue();
  const { add, decrement, increment } = useCounterActions();
  const handleAddFive = () => {
    add(5);
  };
  const handleIncrement = () => {
    increment();
  };
  const handleDecrement = () => {
    decrement();
  };
  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={handleIncrement} data-testid="increment-btn">
        {t('increment')}
      </Button>
      <Button onClick={handleDecrement} data-testid="decrement-btn">
        {t('decrement')}
      </Button>
      <Button onClick={handleAddFive} data-testid="add-five-btn">
        {t('Add five')}
      </Button>
    </div>
  );
};
