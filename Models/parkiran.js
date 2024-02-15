import mongoose, { Mongoose } from "mongoose";
import { Schema } from "mongoose";
mongoose.connect('mongodb://localhost:27017/KangParkir');

const schemaParkiran = new Schema({
    pemilik:String,
    plat:String,
    jenis:String
})

const parkiran = mongoose.model('Parkiran',schemaParkiran);

export default parkiran;