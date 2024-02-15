import mongoose, { Mongoose } from "mongoose";
import { Schema } from "mongoose";
mongoose.connect('mongodb://localhost:27017/KangParkir');

const schemaTampungan = new Schema({
    pemilik:String,
    plat:String,
    jenis:String
})

const tampungan = mongoose.model('Tampungan',schemaTampungan);

export default tampungan;