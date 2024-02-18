import akun from "../Models/akun.js";

async function addUser(nama,password){
    const akunBaru = new akun({
        nama:nama,
        password:password,
        riwayatMobil:0,
        riwayatMotor:0,
        pendapatan:0
    });
    await akunBaru.save();
    return;
}

async function getUser(){
    const akunTarget = await akun.findOne();
    return akunTarget;
}

export default{
    getUser
}



