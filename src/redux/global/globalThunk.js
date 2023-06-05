import { createAsyncThunk } from '@reduxjs/toolkit';

export const setModalProfileOpen = createAsyncThunk(
  'global/modalProfileOpen',
  async (boolean, thunkAPI) => {
    try {
      if (boolean === true || boolean === false) {
        return boolean;
      }
      return thunkAPI.rejectWithValue('value is not boolean type');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
