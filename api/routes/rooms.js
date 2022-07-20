import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updatedRoom } from "../controllers/room.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id",verifyAdmin, updatedRoom);
//DELETE

router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms)

export default router