import { receivePatients } from "../../redux/patients-slice";
import { AppDispatch } from "../../redux/store";
import { getPatients } from "./getPatients";

export const initializeStore = (dispatch: AppDispatch): void => {
  getPatients().then((rawPatients) => {
    dispatch(receivePatients(rawPatients));
  });
};
