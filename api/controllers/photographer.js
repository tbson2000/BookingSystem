import Photographer from "../models/Photographer.js";

// CREATE
export const createPhotographer = async (req,res,next) =>{
    const newPhotographer = new Photographer(req.body)
    
    try {
        const savedPhotographer = await newPhotographer.save()
        res.status(200).json(savedPhotographer)
    } catch (err) {
        next(err);
    }
}

// UPDATE
export const updatedPhotographer = async (req,res,next) =>{    
    try {
        const updatedPhotographer = await Photographer.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true})
        res.status(200).json(updatedPhotographer)
    } catch (err) {
        next(err);
    }
}

// DELETE
export const deletePhotographer = async (req,res,next) =>{
    try {
        await Photographer.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json("Photographer has been deleted");
    } catch (err) {
        next(err);
    }
}

// GET
export const getPhotographer = async (req,res,next) =>{
    try {
        const photographer = await Photographer.findById(
            req.params.id
        )
        res.status(200).json(photographer)
    } catch (err) {
        next(err);
    }
}

// GET ALL
export const getPhotographers = async (req,res,next) =>{
    try {
        const photographers = await Photographer.find()
        res.status(200).json(photographers)
    } catch (err) {
        next(err);
    }
}

export const countByCity = async (req,res,next) =>{
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Photographer.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err);
    }
}