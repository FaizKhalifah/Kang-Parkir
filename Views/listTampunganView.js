import * as controllerTampungan from "../Controllers/controllertampungan.js";

async function view(){
    const listTampungan = await controllerTampungan.default.fetchDataTampungan();
    for(let i in listTampungan){
        console.log("======================================");
        console.log(`Kendaraan ${Number(i)+1} : `);
        console.log(`Pemilik : ${listTampungan[i].pemilik}`);
        console.log(`Plat : ${listTampungan[i].plat}`);
        console.log(`Jenis : ${listTampungan[i].jenis}`);
        console.log("======================================");
    }
    return;
}