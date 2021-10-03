import { getPatients } from "./getPatients";
import { getHeadlines } from "./get-headlines";
import { PatientData, RelativesData, KidsPhoneData } from "../types/patients";
import {
  receivePatients,
  receivePatientsHeadlines,
} from "../../redux/patients-slice";
import { RowRecord } from "../types/types";
import {
  receivePhones,
  receivePhonesHeadlines,
} from "../../redux/phones-slice";
import {
  receiveRelatives,
  receiveRelativesHeadlines,
} from "../../redux/relatives-slice";
import { getFirstKeyInObject } from "./get-first-key";
import { AppDispatch } from "../../redux/store";

export const initializeStore = (dispatch: AppDispatch) => {
  getPatients().then((rawPatients) => {
    const patients: RowRecord<PatientData> = {};
    const relatives: RowRecord<RelativesData> = {};
    const phones: RowRecord<KidsPhoneData> = {};

    for (const patient of rawPatients) {
      const patientId = patient.data["Identification number"];
      patients[patientId] = { data: patient.data, kids: [] };

      if (!patient.kids.has_relatives) continue;
      for (const relative of patient.kids.has_relatives.records) {
        const relativeId = relative.data["Relative ID"];
        relatives[relativeId] = {
          data: relative.data,
          kids: [],
        };
        patients[patientId].kids.push(relativeId);

        if (!relative.kids.has_phone) continue;
        for (const phone of relative.kids.has_phone.records) {
          const phoneId = phone.data["Phone ID"];
          phones[phoneId] = { data: phone.data, kids: [] };
          relatives[relativeId].kids.push(phoneId);
        }
      }
    }

    const patientsFirstKey = getFirstKeyInObject(patients);
    const relativesFirstKey = getFirstKeyInObject(relatives);
    const phoneFirstKey = getFirstKeyInObject(phones);

    const patientsHeadlines = getHeadlines(patients[patientsFirstKey].data);
    const relativesHeadlines = getHeadlines(relatives[relativesFirstKey].data);
    const phonesHeadlines = getHeadlines(phones[phoneFirstKey].data);

    dispatch(receivePatients(patients));
    dispatch(receivePatientsHeadlines(patientsHeadlines));
    dispatch(receiveRelatives(relatives));
    dispatch(receiveRelativesHeadlines(relativesHeadlines));
    dispatch(receivePhones(phones));
    dispatch(receivePhonesHeadlines(phonesHeadlines));
  });
};
