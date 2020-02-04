import * as act from './actions.js';

let brun = document.querySelector("#b2");
let bfight = document.querySelector("#b3");
let bwork = document.querySelector("#b7");
let bsleep = document.querySelector("#b4");
let beat = document.querySelector("#b5");
let bshow = document.querySelector("#b6");
let bkill = document.querySelector("#k");
let bnewlife = document.querySelector("#b1");

export function start(){
    act.init('flo','20','10','false' )
}

window.addEventListener("load", () => {
    bshow.addEventListener("click", (event) => {
        alert(act.get());
    });
});



window.onload = () =>{
}