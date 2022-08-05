import Photographer from "../models/Photographer.js";
import Session from "../models/Session.js";

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
    const {min,max, ...others} = req.query
    try {
        const photographers = await Photographer.find({
            ...others, 
            cheapestPrice:{ $gte: min | 1, $lte: max || 999999},
        }).limit(req.query.limit);
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

// export const countByStyle = async (req,res,next) =>{
//     const primaryType = req.query.style.split(",")
//     try {
//         const list = await Promise.all(primaryType.map(primaryType=>{
//             return Photographer.countDocuments({primaryType:[primaryType]})
//         }))
//         console.log(list)
//         res.status(200).json(list)
//     } catch (err) {
//         next(err);
//     }
// }

export const countByPriType = async (req,res,next) =>{
    try {
        const familyCount = await Photographer.countDocuments({primaryType:"family/kid"});
        const portraitCount = await Photographer.countDocuments({primaryType:"portrait"})
        const weddingCount = await Photographer.countDocuments({primaryType:"wedding"})
        const fashionCount = await Photographer.countDocuments({primaryType:"fashion"})
        const requestCount = await Photographer.countDocuments({primaryType:"request"})
        res.status(200).json([
            {primaryType: "family/kid", count: familyCount},
            {primaryType: "portrait", count: portraitCount},
            {primaryType: "wedding", count: weddingCount},
            {primaryType: "fashion", count: fashionCount},
            {primaryType: "request", count: requestCount},
        ])
    } catch (err) {
        next(err);
    }
}

export const getPhotographerSessions = async (req,res,next)=>{
    try {
        const photographer = Photographer.findById(req.params.id)
        const list = await Promise.all(photographer.sessions.map(session=>{
            return Session.findById(session)
        }))
        res.status(200).json
    } catch (err) {
        next(err)
    }
}