import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import usersReducer from '../slices/usersSlice';
import infoReducer from '../slices/infoSlice';
//import { useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux";

// configureStore mergia in un uncico grande reducer tutti i reducer degli slice creati e importati
const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    info: infoReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

/* 
   se non si vuole aggiungere nella cartella un file hook, con le funzioni hook da esportare,
   aggiungere a questo file, anche le sguenti righe di codice:

   export const useAppDispatch = () => useDispatch<AppDispatch>()
   export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

   Le righe di codice fornite definiscono due hook personalizzati che possono essere utilizzati 
   in un componente React per semplificare l'utilizzo dello store Redux.
   Il vantaggio principale di utilizzare queste righe di codice è la maggiore facilità di accesso 
   allo store Redux all'interno di componenti funzionali. Con l'hook useAppDispatch, è possibile 
   ottenere un'istanza del dispatcher dello store Redux per inviare azioni direttamente dai componenti. 
   Con l'hook useSelector, è possibile selezionare porzioni specifiche dello stato globale dello store Redux 
   all'interno del componente.
   Inoltre, l'utilizzo di questi hook personalizzati aiuta a mantenere il codice più leggibile e organizzato, 
   in quanto rende chiaro il tipo di dati che ci si aspetta di utilizzare con lo store Redux all'interno del componente.
   In definitiva, l'utilizzo delle righe di codice fornite facilita e ottimizza l'utilizzo dello store Redux 
   all'interno di componenti React, fornendo un modo più semplice e dichiarativo per interagire con lo stato globale 
   dell'applicazione.

   Questa sarebbe l'alternativa nel non esportatre gli hook nello store, importandoli invece nel 
   componente react:

   import { useDispatch, useSelector } from 'react-redux';
   import { RootState, AppDispatch } from './store';

   const MyComponent = () => {
      const dispatch = useDispatch<AppDispatch>();
      const state = useSelector<RootState>((state) => state);

      return (
         <div>
            <h1>{state.title}</h1>
            <button onClick={() => dispatch({ type: 'CHANGE_TITLE', payload: 'New Title' })}>Change Title</button>
         </div>
      );
   }
*/
