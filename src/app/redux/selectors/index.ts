import { UseAppSelector } from '../hooks';

export const GetCounterState = () =>
  UseAppSelector((state) => state.counter.counter);

export const GetUsersState = () => UseAppSelector((state) => state.users);

export const GetInfo = () =>
  UseAppSelector((state) => {
    return state.info;
  });
