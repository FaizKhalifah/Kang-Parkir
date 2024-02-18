import * as controllerParkiran from "../Controllers/controllerparkiran.js";

async function view(){
    const listParkiran = await controllerParkiran.default.fetchDataParkiran();
    for (let i in listParkiran){
        console.log("======================================");
        console.log(`Kendaraan ${Number(i)+1} : `);
        console.log(`Pemilik : ${listParkiran[i].pemilik}`);
        console.log(`Plat : ${listParkiran[i].plat}`);
        console.log(`Jenis : ${listParkiran[i].jenis}`);
        console.log("======================================");
    }
    return;
}

