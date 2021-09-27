import { KidsPhoneData, PatientData, RelativesData } from "../types/patients";

export const getHeadline = (
  data: PatientData | RelativesData | KidsPhoneData
): string[] | undefined => {
  if (!data) {
    return;
  }
  return Object.keys(data);
};
