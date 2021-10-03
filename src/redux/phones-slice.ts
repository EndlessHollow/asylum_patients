import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KidsPhoneData } from "../modules/types/patients";
import { RowRecord } from "../modules/types/types";

export interface KidsPhoneInformations {
  headlines: string[];
  phones: RowRecord<KidsPhoneData>;
}

const initialState: KidsPhoneInformations = {
  headlines: [],
  phones: {},
};

const phonesSlice = createSlice({
  name: "relatives",
  initialState,
  reducers: {
    receivePhones: (state, action: PayloadAction<RowRecord<KidsPhoneData>>) => {
      return {
        headlines: state.headlines,
        phones: action.payload,
      };
    },
    receivePhonesHeadlines: (state, action: PayloadAction<string[]>) => {
      return {
        headlines: action.payload,
        phones: state.phones,
      };
    },
  },
});

export const { receivePhones, receivePhonesHeadlines } = phonesSlice.actions;

export const phonesReducer = phonesSlice.reducer;
