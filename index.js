import process from "process";
import readlinePromises from "readline/promises";
import * as viewAddParkiran from "./Views/addParkiranView.js";
import * as viewDeleteParkiran from "./Views/deleteParkiranView.js";

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})


