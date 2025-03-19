// patientor_backend/src/routes/patients.ts
import express from 'express';
import patientsService from '../services/patientsService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(patientsService.getPatients());
});

export default router;