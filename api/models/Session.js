import mongoose from 'mongoose';

const SessionSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },
    duration:{
        type: Number,
        required:true,
    },
    maxPeople:{
        type: Number,
        required:true,
    },
    desc:{
        type: String,
        required:true,
    },
    sessionInfo:[{name:String, unavailableDates:{type: [Date]}}],
},
{timestamps: true});

export default mongoose.model("Session", SessionSchema)