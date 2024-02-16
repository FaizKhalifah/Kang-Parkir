import parkiran from "../Models/parkiran.js";

async function addParkiran(pemilik,plat,jenis){
    const parkiranBaru = new parkiran({
        pemilik:pemilik,
        plat:plat,
        jenis:jenis
    })
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


const status = await checkParkiran("Faiz","asdasdsa");
console.log(status);