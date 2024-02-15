import mongoose, { Mongoose } from "mongoose";
import { Schema } from "mongoose";
mongoose.connect('mongodb://localhost:27017/KangParkir');

const schemaAkun = new Schema({
    nama:String,
    riwayatMobil:Int16Array,
    riwayatMotor:Int16Array,
    pendapatan:Int16Array
})

const akun = mongoose.model("Akun",schemaAkun);
export default akun;