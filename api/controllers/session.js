import Session from "../models/Session.js";
import Photographer from "../models/Photographer.js";
import {createError} from "../utils/error.js";

export const createSession = async (req,res,next)=>{

    const photographerId = req.params.photographerid;
    const newSession = new Session(req.body)

    try {
        const savedSession = await newSession.save()
        try {
            await Photographer.findByIdAndUpdate(photographerId, {
                $push: {sessions: savedSession._id},
            });
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedSession);
    } catch (err) {
        next(err)
    }
}


// UPDATE
export const updatedSession = async (req,res,next) =>{    
    try {
        const updatedSession = await Session.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true})
        res.status(200).json(updatedSession)
    } catch (err) {
        next(err);
    }
}

export const updatedSessionAvailability = async (req,res,next) =>{    
    try {
        await Session.updateOne(
            {"sessionInfo._id":req.params.id}, 
            {$push: {
                "sessionInfo.$.unavailableDates": req.body.dates
            }}
        )
        res.status(200).json(updatedSession)
    } catch (err) {
        next(err);
    }
}
// DELETE
export const deleteSession = async (req,res,next) =>{
    const photographerId = req.params.photographerid;
    try {
        await Session.findByIdAndDelete(
            req.params.id
        )
        try{
            await Photographer.findByIdAndUpdate(photographerId, {
                $pull: {sessions: req.params.id },
            })
        } catch (err){
            next(err)
        }
        res.status(200).json("Session has been deleted");
    } catch (err) {
        next(err);
    }
}

// GET
export const getSession = async (req,res,next) =>{
    try {
        const session = await Session.findById(
            req.params.id
        )
        res.status(200).json(session)
    } catch (err) {
        next(err);
    }
}

// GET ALL
export const getSessions = async (req,res,next) =>{
    try {
        const sessions = await Session.find()
        res.status(200).json(sessions)
    } catch (err) {
        next(err);
    }
}