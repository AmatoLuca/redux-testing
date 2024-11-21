import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';

// UseAppDispatch è una funzione che restituisce il tipo AppDispatch, ovvero la funzione di dispatch del negozio
export const UseAppDispatch: () => AppDispatch = useDispatch;
// UseAppSelector, corrisponde alla funzione useSelector che permette di selezionare parte dello stato globale dello store.
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
