import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ApiService } from './service/apiService'

export const store = configureStore({
  reducer: {
    [ApiService.reducerPath]:ApiService.reducer,
  },
  middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware),
});

setupListeners(store.dispatch);