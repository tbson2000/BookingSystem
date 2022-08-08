import express from "express";
import { countByPriType, countByCity, createPhotographer,
         deletePhotographer, 
         getPhotographer, 
         getPhotographers, 
         updatedPhotographer, 
         getPhotographerSessions
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

router.get("/find/:id", getPhotographer);
//GET ALL

router.get("/", getPhotographers)

router.get("/countByCity", countByCity);
router.get("/countByPriType", countByPriType);
router.get("/session/:id", getPhotographerSessions);


export default router