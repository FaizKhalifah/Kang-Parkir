import mongoose, { Mongoose } from "mongoose";
import { Schema } from "mongoose";
mongoose.connect('mongodb://localhost:27017/KangParkir');

const schemaAkun = new Schema({
    nama:String,
    password:String,
    riwayatMobil:Number,
    riwayatMotor:Number,
    pendapatan:Number
})

const akun = mongoose.model("Akun",schemaAkun);
export default akun;