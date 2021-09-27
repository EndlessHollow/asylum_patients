import { KidsPhoneData, PatientData, RelativesData } from "../types/patients";

export const getTableCells = (
  data: PatientData | RelativesData | KidsPhoneData
): string[] => {
  return Object.values(data);
};
