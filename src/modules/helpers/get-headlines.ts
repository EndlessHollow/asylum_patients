import { PatientData, RelativesData, KidsPhoneData } from "../types/patients";

export const getHeadlines = (
  data: PatientData | RelativesData | KidsPhoneData
): string[] => {
  if (!data) {
    return [];
  }
  return Object.keys(data);
};
