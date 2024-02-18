import process from "process";
import readlinePromises from "readline/promises";
import * as viewAddParkiran from "./Views/addParkiranView.js";
import * as viewDeleteParkiran from "./Views/deleteParkiranView.js";
import * as viewListParkiran from "./Views/listParkiranView.js";
import * as viewListTampungan from "./Views/listTampunganView.js";

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})



async function main(){
    const kumpulanOpsi = ["Lihat isi parkiran","Lihat isi tampungan","Tambah kendaraan ke parkiran","Hapus kendaraan dari parkiran","keluar"];
    while(true){
        console.log("======================================");
        for(let i in kumpulanOpsi){
            console.log(`${Number(i)+1} ${kumpulanOpsi[i]}`);
        }
        const opsi = await input.question("Masukkan opsi yang kamu mau dalam angka : ");
        if(opsi==1){
            await viewListParkiran.default.view();
        }else if(opsi==2){
            await viewListTampungan.default.view();
        }else if(opsi==3){
            await viewAddParkiran.default.view();
        }else if(opsi==4){
            await viewDeleteParkiran.default.view();
        }else if(opsi==5){
            console.log("Keluar dari program");
            process.exit(1);
        }else{
            console.log("Perintah tidak dikenal");
        }
    }
}

main();






