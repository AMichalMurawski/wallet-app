import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { globalReducer } from './global/globalSlice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

export const persistor = persistStore(store);
