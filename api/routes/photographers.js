import express from "express";
import { countByCity, createPhotographer,
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

router.get("/countByCity", countByCity);
router.get("/countByType", getPhotographers)

export default router