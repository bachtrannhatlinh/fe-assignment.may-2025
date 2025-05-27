import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import addressReducer from "./addressSlice";
import customerTableReducer from "./customerTableSlice";
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
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  toggle: toggleReducer,
  address: addressReducer,
  customerTable: customerTableReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["address", "customerTable"],
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