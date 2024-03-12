import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './slice/userSlice';
import serviceReducer from './slice/serviceSlice';
import authReducer from './slice/authSlice';
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  userReducer,
  authReducer,
  serviceReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store)