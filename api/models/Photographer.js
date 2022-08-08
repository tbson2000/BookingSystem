import mongoose from 'mongoose';

const PhotographerSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    primaryType:{
        type: String,
        required:true       
    },
    secondaryType:{
        type:String
    },
    address:{
        type: String,
        required:true
    },   
    city:{
        type: String,
        required:true
    }, 
    photos:{
        type: [String],
    },
    title:{
        type: String,
        required:true
    },
    desc:{
        type: String,
        required:true
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    sessions:{
        type: [String],
    },
    cheapestPrice:{
        type: Number,
        required:true
    },
    featured:{
        type: Boolean,
        default:false
    },
});

export default mongoose.model("Photographer", PhotographerSchema)