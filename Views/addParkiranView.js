import * as controllerParkiran from "../Controllers/controllerparkiran.js";
import * as controllerTampungan from "../Controllers/controllertampungan.js";
import process from "process";
import readlinePromises from "readline/promises";

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})

async function view(){
    const pemilik = await input.question("Masukkan nama pemilik kendaraan : ");
    const plat = await input.question("Masukkan nomor plat kendaraan tersebut : ");
    const jenis = await input.question("Masukkan jenis kendaraan tersebut : ");
    const statusData = await controllerParkiran.default.fetchDataParkiran();
    if(statusData.length>=5){
        console.log("Parkiran sudah penuh");
        while(true){
            const opsiPindah = await input.question("Apakah kamu ingin memasukkan kendaraan ini ke tampungan sementara (ya/tidak) ? ");
            if(opsiPindah.toLowerCase()=="ya"){
                await controllerTampungan.default.addTampungan(pemilik,plat,jenis);
                console.log(`Kendaraan ${jenis} dengan plat ${plat} atas nama ${pemilik} ditaruh di penampungan sementara`);
                return;
            }else if(opsiPindah.toLowerCase()=="tidak"){
                console.log("Baiklah, sampai jumla lagi");
                process.exit(1);
            }else{
                console.log("Perintah tidak dikenal");
            }
        }
    }else{
        await controllerParkiran.default.addParkiran(pemilik,plat,jenis);
        process.exit(1);
    }
}

export default{
    view
}

