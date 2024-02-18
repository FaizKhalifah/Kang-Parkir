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
    if(statusData.length>=3){
        console.log("Parkiran sudah penuh");
    }
}

