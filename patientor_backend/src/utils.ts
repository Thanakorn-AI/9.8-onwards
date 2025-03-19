// patientor_backend/src/utils.ts
import { NewPatient, Gender } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseString = (value: unknown, field: string): string => {
  if (!value || !isString(value)) {
    throw new Error(`Incorrect or missing ${field}: ${value}`);
  }
  return value;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error(`Incorrect or missing date: ${date}`);
  }
  return date;
};

const isGender = (value: string): value is Gender => {
  return Object.values(Gender).includes(value as Gender);
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error(`Incorrect or missing gender: ${gender}`);
  }
  return gender as Gender;
};

export const toNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
    const newPatient: NewPatient = {
      name: parseString(object.name, 'name'),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseString(object.ssn, 'ssn'),
      gender: parseGender(object.gender),
      occupation: parseString(object.occupation, 'occupation')
    };
    return newPatient;
  }

  throw new Error('Missing required fields');
};