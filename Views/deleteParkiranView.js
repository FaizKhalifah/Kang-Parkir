import * as controllerParkiran from "../Controllers/controllerparkiran.js";
import * as controllerTampungan from "../Controllers/controllertampungan.js";
import process from "process";
import readlinePromises from "readline/promises";

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})

async function view(){
    const pemilik = await input.question("Masukkan pemilik kendaraan yang ingin keluar : ");
    const plat = await input.question("Masukkan plat kendaraan yang ingin keluar : ");
    await controllerParkiran.default.deleteParkiran(pemilik,plat);
    const data = await controllerTampungan.default.fetchDataTampungan();
    if(data.length>0){
        const kendaraan = await controllerTampungan.default.pop();
        await controllerParkiran.default.addParkiran(kendaraan.pemilik,kendaraan.plat,kendaraan.jenis);
        console.log(`Kendaraan ${kendaraan.jenis} dengan plat ${kendaraan.plat} atas nama ${kendaraan.pemilik} kini berada
        di parkiran`);
        return;
    }
}