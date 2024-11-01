'use client';

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { store } from './redux/store';
 
interface ReduxProviderProps {
  children: ReactNode;
}

// This is correct: ensure you're not using `Provider` as a type
export const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
