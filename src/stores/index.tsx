import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';
import orderReducer from './slices/orderSlice';
import { authApi } from '../services/authApi';
import { productApi } from '../services/productApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    orders: orderReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(productApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
