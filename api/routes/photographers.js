import express from "express";
import { createPhotographer,
         deletePhotographer, 
         getPhotographer, 
         getPhotographers, 
         updatedPhotographer 
        } from "../controllers/photographer.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createPhotographer);

//UPDATE
router.put("/:id",verifyAdmin, updatedPhotographer);
//DELETE

router.delete("/:id",verifyAdmin, deletePhotographer);
//GET

router.get("/:id", getPhotographer);
//GET ALL

router.get("/", getPhotographers)

export default router