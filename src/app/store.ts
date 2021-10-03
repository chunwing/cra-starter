import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import reservationsReducer from '../features/resvervations/reservationsSlice';
import customerReducer from '../features/customer/customerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    reservations:reservationsReducer,
    customer: customerReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
