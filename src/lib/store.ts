import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './features/api.slice';
import authReducers from './features/auth/auth.reducers';


const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  
  auth: authReducers,
 
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
