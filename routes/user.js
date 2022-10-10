import express from 'express';
import { signin, signup, update } from '../controllers/user.js';

const router = express.Router();

router
    .route("/signin")
    .post(signin)

router
    .route("/signup")
    .post(signup)

router
    .route("/update")
    .patch(update)

export default router;