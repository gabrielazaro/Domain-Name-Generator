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

/* var pronombre = ["la", "esta", "esa"];
var sujeto = ["manzana", "pera", "fresa"];
var adjetivo = ["loca", "pequeña", "grande"];

const dominioMix = [pronombre, sujeto, adjetivo];

function generarNombreDeDominio(dominioMix) {
  let pronombreIndex = Math.floor(Math.random() * dominioMix[0].length);
  let sujetoIndex = Math.floor(Math.random() * dominioMix[1].length);
  let adjetivoIndex = Math.floor(Math.random() * dominioMix[2].length);

  let nombreDeDominio = "";

  for (let i = 0; i < dominioMix.length; i++) {
    nombreDeDominio += dominioMix[i][pronombreIndex];
    if (i === 0) {
      nombreDeDominio += dominioMix[i][sujetoIndex];
    } else if (i === 1) {
      nombreDeDominio += dominioMix[i][adjetivoIndex];
    }
  }

  nombreDeDominio += ".com";

  return nombreDeDominio;
}

console.log(generarNombreDeDominio(dominioMix)); */
