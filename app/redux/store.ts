import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
// import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    // Add your reducers here
    // counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
