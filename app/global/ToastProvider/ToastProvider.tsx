import { Toaster, toast } from 'sonner';
import React from 'react';

export const ToastProvider = () => {
  return <Toaster richColors />;
};

export const toastSuccess = (message: string) => {
  toast.success(message, {
    style: {
      backgroundColor: '#D1FAE5', // Light green background
      color: '#065F46',           // Dark green text
    },
  });
};

export const toastError = (message: string) => {
  toast.error(message, {
    style: {
      backgroundColor: '#FEE2E2', // Light red background
      color: '#B91C1C',           // Dark red text
    },
  });
};
