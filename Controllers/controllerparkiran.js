import parkiran from "../Models/parkiran.js";

async function addParkiran(pemilik,plat,jenis){
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
    checkParkiran,
    fetchDataParkiran
}



