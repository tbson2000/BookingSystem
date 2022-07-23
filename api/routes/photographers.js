import express from "express";
import { countByCity, countByRating, createPhotographer,
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

router.get("/find/:id", getPhotographer);
//GET ALL

router.get("/", getPhotographers)

router.get("/countByCity", countByCity);
router.get("/countByType", getPhotographers);
router.get("/countByRating",countByRating);
router.get("/countBySession");
export default router