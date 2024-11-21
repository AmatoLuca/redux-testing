import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../store/store';

interface AsyncThunkConfig {
  state: RootState;
}

// parametri valore da restituire, parametri in input, AsyncThunkConfig è il tipo di configurazione del thunk asincrono.
export const getUsers = createAsyncThunk<any, void, AsyncThunkConfig>(
  'users/fetchGithubUsers',
  async () => {
    try {
      const { data: response } = await axios.get(
        'https://api.github.com/users'
      );
      return response;
    } catch (error) {
      console.error(error);
      throw new Error('Something went wrong');
    }
  }
);
