import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@rtk-incubator/rtk-query';
import { spacexApi } from '../services/users';

export const store = configureStore({
  reducer: {
    [spacexApi.reducerPath]: spacexApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spacexApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch);