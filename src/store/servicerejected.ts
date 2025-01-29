import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';

/**
 * Logout user after unauthorized request!
 */
export const rtkQueryErrorLogger: Middleware = () => next => (action: any) => {
  let result = next(action);

  if (isRejectedWithValue(action)) {
    console.warn('We got a rejected action!');

    if (action?.payload?.status === 401) {
      console.log(action?.payload);
    }
  }

  return result;
};
