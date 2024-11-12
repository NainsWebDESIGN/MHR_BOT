import express from "express";
import err from '../service/catchError.js';
import { getRocks } from "../controllers/rockController.js";
const router = express.Router();

router.get("/", err(getRocks));

export default router;
