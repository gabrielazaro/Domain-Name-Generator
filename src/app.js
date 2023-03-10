/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const pronombre = ["la", "esta", "esa"];
const sujeto = ["manzana", "pera", "fresa"];
const adjetivo = ["loca", "pequeña", "grande"];

let dominioMix = "";

for (let i = 0; i < pronombre.length; i++) {
  for (let j = 0; j < sujeto.length; j++) {
    for (let k = 0; k < adjetivo.length; k++) {
      dominioMix += pronombre[i] + sujeto[j] + adjetivo[k] + ".com\n";
    }
  }
}

console.log(dominioMix);
