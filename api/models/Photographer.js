import mongoose from 'mongoose';

const PhotographerSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    address:{
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
    style:{
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