import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PatientData, PatientRecord } from "../modules/types/patients";
import { RowRecord } from "../modules/types/types";
export interface PatientsInformation {
  headlines: string[];
  patients: RowRecord<PatientData>;
}

const initialState: PatientsInformation = {
  headlines: [],
  patients: {},
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    receivePatients: (state, action: PayloadAction<RowRecord<PatientData>>) => {
      return {
        headlines: state.headlines,
        patients: action.payload,
      };
    },
    receivePatientsHeadlines: (state, action: PayloadAction<string[]>) => {
      return {
        headlines: action.payload,
        patients: state.patients,
      };
    },
  },
});

export const { receivePatients, receivePatientsHeadlines } =
  patientsSlice.actions;

export const patientsReducer = patientsSlice.reducer;
