// patientor_backend/src/services/patientsService.ts
import patientsData from '../../data/patients';
import { Patient, NonSensitivePatient, NewPatient } from '../types';
import { v1 as uuid } from 'uuid';

const patients: Patient[] = patientsData;

const getPatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (entry: NewPatient): Patient => {
  const newPatient = {
    id: uuid(), // Generate unique ID
    ...entry
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  addPatient
};