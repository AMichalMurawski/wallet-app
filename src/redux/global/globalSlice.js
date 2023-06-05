import { createSlice } from '@reduxjs/toolkit';
import { setModalProfileOpen } from './globalThunk';

const initialState = {
  isModalProfileOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  extraReducers: builder => {
    builder.addCase(setModalProfileOpen.fulfilled, (state, action) => {
      state.isModalProfileOpen = action.payload;
    });
  },
});

export const globalReducer = globalSlice.reducer;
