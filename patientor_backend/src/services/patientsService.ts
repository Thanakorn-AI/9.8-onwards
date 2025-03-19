// patientor_backend/src/services/patientsService.ts
import patientsData from '../../data/patients';
import { Patient, NonSensitivePatient } from '../types';

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

export default {
  getPatients
};