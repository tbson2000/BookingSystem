import express from "express";
import { createSession, deleteSession, getSession, getSessions, updatedSession } from "../controllers/session.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createSession);

//UPDATE
router.put("/:id",verifyAdmin, updatedSession);
//DELETE

router.delete("/:id/:hotelid",verifyAdmin, deleteSession);
//GET

router.get("/:id", getSession);
//GET ALL

router.get("/", getSessions)

export default router