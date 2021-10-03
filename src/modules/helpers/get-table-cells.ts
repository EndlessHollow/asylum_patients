import { KidsPhoneData, PatientData, RelativesData } from "../types/patients";
import { Row } from "../types/types";

export const getTableCells = <D>(data: D): string[] => {
  return Object.values(data);
};
