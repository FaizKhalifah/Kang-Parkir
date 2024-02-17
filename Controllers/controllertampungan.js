import tampungan from "../Models/tampungan.js";

async function addTampungan(nama,plat,jenis){
    const status = await checkTampungan(nama,plat);
    if(status==true){
        console.log("Kendaraan ini sudah ada di tampungan");
        return;
    }else{
        const tampunganBaru = new tampungan({
            nama:nama,
            plat:plat,
            jenis:jenis
        });
        await tampunganBaru.save();
        console.log("Kendaraan baru berhasil disimpan dalam tampungan");
        return;
    }

}

async function deleteTampungan(nama,plat){
    const status = await checkTampungan(nama,plat);
    if(status==false){
        console.log("Kendaraan tersebut tidak ada di tampungan");
        return;
    }
    const identitasTampungan={
        nama:nama,
        plat:plat
    };
   await tampungan.deleteOne(identitasTampungan);
   console.log("Kendaraan dikeluarkan dari tampungan");
    return;
}

async function checkTampungan(nama,plat){
    const identitasTampungan={
        nama:nama,
        plat:plat
    }
    const status = await tampungan.findOne(identitasTampungan);
    if(status==undefined){
        return false;
    }else{
        return true;
    }
}

export default{
    addTampungan,
    deleteTampungan,
    checkTampungan
}