import { UseAppDispatch } from '../../app/redux/hooks';
import { GetCounterState } from '../../app/redux/selectors';
import {
  increment,
  decrement,
  reset,
} from '../../app/redux/slices/counterSlice';
import './Counter.css';

const Counter = () => {
  const counter = GetCounterState();
  const dispatch = UseAppDispatch();

  const handleClickIncrement = () => {
    dispatch(increment());
  };

  const handleClickDecrement = () => {
    dispatch(decrement());
  };

  const handleClickReset = () => {
    dispatch(reset());
  };

  return (
    <div className="counter-container">
      <div className="counter">{counter}</div>
      <div className="counter-buttons-container">
        <button onClick={handleClickIncrement}>+</button>
        <button onClick={handleClickDecrement}>-</button>
      </div>
      <button onClick={handleClickReset}>reset</button>
    </div>
  );
};

export default Counter;
