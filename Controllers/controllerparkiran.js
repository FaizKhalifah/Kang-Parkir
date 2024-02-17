import parkiran from "../Models/parkiran.js";
import * as controllerTampungan from "./controllertampungan.js";
import process from "process";
import readlinePromises from "readline/promises";

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})


async function addParkiran(pemilik,plat,jenis){
    const data = await fetchDataParkiran();
    if(data.length>=3){
        console.log("Parkiran sudah penuh");
        const opsi = await input.question("Apakah kamu ingin menyimpan kendaraanmu di penampungan (ya/tidak) ? ");
        if(opsi.toLocaleLowerCase()=="ya"){
            await controllerTampungan.default.addTampungan(pemilik,plat,jenis);
            console.log("Kendaraan anda kini berada di tampungan terlebih dahulu");
            return;
        }else{
            console.log("Baiklah, sampai jumpa di lain waktu");
            return;
        }
        
    }
    const status = await checkParkiran(pemilik,plat);
    if(status==true){
        console.log("Kendaraan ini sudah ada di parkiran");
        return;
    }
    const parkiranBaru = new parkiran({
        pemilik:pemilik,
        plat:plat,
        jenis:jenis
    })
    console.log(`${jenis} dengan plat ${plat} atas nama ${pemilik} telah masuk ke parkiran`)
    await parkiranBaru.save();
    return;
}

async function deleteParkiran(pemilik,plat){
    const identitasParkian = {
        pemilik:pemilik,
        plat:plat
    }
    const status = await checkParkiran(pemilik,plat);
    if(status==false){
        console.log("Tidak ada kendaraan tersebut di dalam parkiran");
        return;
    }else{
        await parkiran.deleteOne(identitasParkian);
        console.log("Kendaraan telah keluar dari parkiran");
        return;
    }
}

async function checkParkiran(pemilik,plat){
    const identitasParkian = {
        pemilik:pemilik,
        plat:plat
    }
    const status = await parkiran.findOne(identitasParkian);
    if(status==undefined){
        return false;
    }else{
        return true;
    }
}

async function fetchDataParkiran(){
    const data = await parkiran.find();
    return data;
}

export default{
    addParkiran,
    deleteParkiran,
    checkParkiran
}

await addParkiran("Bagas","B1231","Motor");


