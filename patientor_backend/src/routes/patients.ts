// patientor_backend/src/routes/patients.ts
import express from 'express';
import patientsService from '../services/patientsService';
import { toNewPatient } from '../utils';
import { z } from 'zod'; // Add this import

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(patientsService.getPatients());
});

router.post('/', (req, res) => {
  try {
    const newPatientData = toNewPatient(req.body);
    const addedPatient = patientsService.addPatient(newPatientData);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof z.ZodError) {
      errorMessage = error.issues.map(issue => `${issue.path}: ${issue.message}`).join(', ');
    } else if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;