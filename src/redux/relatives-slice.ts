import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RelativesData } from "../modules/types/patients";
import { RowRecord } from "../modules/types/types";

export interface RelativesInformations {
  headlines: string[];
  relatives: RowRecord<RelativesData>;
}

const initialState: RelativesInformations = {
  headlines: [],
  relatives: {},
};

const relativesSlice = createSlice({
  name: "relatives",
  initialState,
  reducers: {
    receiveRelatives: (
      state,
      action: PayloadAction<RowRecord<RelativesData>>
    ) => {
      return {
        headlines: state.headlines,
        relatives: action.payload,
      };
    },

    receiveRelativesHeadlines: (state, action: PayloadAction<string[]>) => {
      return {
        headlines: action.payload,
        relatives: state.relatives,
      };
    },
  },
});

export const { receiveRelatives, receiveRelativesHeadlines } =
  relativesSlice.actions;

export const relativesReducer = relativesSlice.reducer;
