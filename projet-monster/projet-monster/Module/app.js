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
    act.init('flo', 20 , 10, false );
}


window.addEventListener("load", () => {
    bshow.addEventListener("click", (event) => {
        alert(act.get());
    });
});

window.addEventListener("load", () => {
    brun.addEventListener("click", (event) => {
        act.run();
    });
});

window.addEventListener("load", () => {
    bfight.addEventListener("click", (event) => {
        act.fight();
    });
});

window.addEventListener("load", () => {
        bwork.addEventListener("click", (event) => {
        act.work();
    });
});

window.addEventListener("load", () => {
    beat.addEventListener("click", (event) => {
       act.eat();
    });
});

window.addEventListener("load", () => {
    bsleep.addEventListener("click", (event) => {
        act.sleep();
    });
});