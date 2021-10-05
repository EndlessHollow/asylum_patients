import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PatientRecord } from "../modules/types/patients";

export interface PatientsRecords {
  data: PatientRecord[];
}

const initialState: PatientsRecords = {
  data: [],
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    receivePatients: (_, action: PayloadAction<PatientRecord[]>) => {
      return {
        data: action.payload,
      };
    },
    deleteRow: (state, action: PayloadAction<number[]>) => {
      console.log("payload", action.payload);
      switch (action.payload.length) {
        case 1:
          delete state.data[action.payload[0]];
          break;
        case 2:
          delete state.data[action.payload[0]].kids.has_relatives?.records[
            action.payload[1]
          ];
          break;
        case 3:
          delete state.data[action.payload[0]].kids.has_relatives?.records[
            action.payload[1]
          ].kids.has_phone?.records[action.payload[2]];
          break;
      }

      return state;
    },
  },
});

export const { receivePatients, deleteRow } = patientsSlice.actions;

export const patientsReducer = patientsSlice.reducer;
