import express from 'express';
import { addOnce, getAll, getOnce, patchOnce } from '../controllers/game.js';

const router = express.Router();

router
    .route("/")
    .get(getAll)
    .post(addOnce)
    .patch(patchOnce)

router
    .route("/:title")
    .get(getOnce)


export default router;