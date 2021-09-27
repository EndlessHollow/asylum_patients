export interface PatientsData {
  data: PatientData;
  kids: PatientKids;
}

export interface PatientData {
  "Identification number": string;
  Name: string;
  Gender: string;
  Risk: string;
  "Hair length": string;
  IQ: string;
  "Admission date": string;
  "Last breakdown": string;
  "Yearly fee": string;
  "Knows the Joker?": string;
}

export interface PatientKids {
  has_relatives?: HasRelatives;
}

export interface HasRelatives {
  records: HasRelativesRecord[];
}

export interface HasRelativesRecord {
  data: RelativesData;
  kids: RelativeKids;
}

export interface RelativesData {
  "Relative ID": string;
  "Patient ID": string;
  "Is alive?": string;
  "Frequency of visits": string;
}

export interface RelativeKids {
  has_phone?: HasPhone;
}

export interface HasPhone {
  records: HasPhoneRecord[];
}

export interface HasPhoneRecord {
  data: KidsPhoneData;
  kids: Kids;
}

export interface KidsPhoneData {
  "Phone ID": string;
  "ID of the relative": string;
  Phone: string;
}

export interface Kids {}
