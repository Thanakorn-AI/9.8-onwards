// patientor_backend/src/types.ts
export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string; // Per exercise, assume string for now
  occupation: string;
}

export type NonSensitivePatient = Omit<Patient, 'ssn'>;