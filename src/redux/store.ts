import { configureStore } from "@reduxjs/toolkit";
import { patientsReducer } from "./patients-slice";
import { relativesReducer } from "./relatives-slice";
import { phonesReducer } from "./phones-slice";

export const store = configureStore({
  reducer: {
    patients: patientsReducer,
    relatives: relativesReducer,
    phones: phonesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
