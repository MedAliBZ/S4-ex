import express from 'express';
import { buy } from '../controllers/achat.js';

const router = express.Router();

router
    .route("/")
    .post(buy)

export default router;