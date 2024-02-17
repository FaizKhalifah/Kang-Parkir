import tampungan from "../Models/tampungan.js";

async function addTampungan(pemilik,plat,jenis){
    const status = await checkTampungan(pemilik,plat);
    if(status==true){
        console.log("Kendaraan ini sudah ada di tampungan");
        return;
    }else{
        const tampunganBaru = new tampungan({
            pemilik:pemilik,
            plat:plat,
            jenis:jenis
        });
        await tampunganBaru.save();
        console.log("Kendaraan baru berhasil disimpan dalam tampungan");
        return;
    }

}

async function deleteTampungan(pemilik,plat){
    const status = await checkTampungan(nama,plat);
    if(status==false){
        console.log("Kendaraan tersebut tidak ada di tampungan");
        return;
    }
    const identitasTampungan={
        pemilik:pemilik,
        plat:plat
    };
   await tampungan.deleteOne(identitasTampungan);
   console.log("Kendaraan dikeluarkan dari tampungan");
    return;
}

async function checkTampungan(pemilik,plat){
    const identitasTampungan={
        pemilik:pemilik,
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