import { PatientRecord } from "../types/patients";

export async function getPatients(): Promise<PatientRecord[]> {
  const result = await fetch("/patients.json");
  return result.json();
}
