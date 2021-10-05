import {
  HasPhoneRecord,
  HasRelativesRecord,
  PatientKids,
  RelativesKids,
} from "../types/patients";

export const getChildRecords = (
  kids: PatientKids | RelativesKids
): HasRelativesRecord[] | HasPhoneRecord[] => {
  if (
    !kids ||
    !Object.keys(kids) ||
    Object.keys(kids).length < 1 ||
    !Object.keys(kids)[0]
  ) {
    return [];
  }

  if ("has_relatives" in kids) {
    return kids.has_relatives ? kids.has_relatives.records : [];
  }
  if ("has_phone" in kids) {
    return kids.has_phone ? kids.has_phone.records : [];
  }

  return [];
};
