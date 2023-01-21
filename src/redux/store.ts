import { persistReducer, persistStore } from 'redux-persist';
import authReducer from './slices/auth/index';
import carritoReducer from './slices/carrito/index';
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

const persistAuthConfig = {
  key: 'user',
  storage,
}

export const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authReducer>>(persistAuthConfig, authReducer),
    carrito: carritoReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);