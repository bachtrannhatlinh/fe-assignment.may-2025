import { configureStore, combineReducers } from "@reduxjs/toolkit";
import summaryReducer from "./summarySlice";
import addressReducer from "./addressSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // sử dụng localStorage

const rootReducer = combineReducers({
  summary: summaryReducer,
  address: addressReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["address"], // chỉ persist slice address
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;