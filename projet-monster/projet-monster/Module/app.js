import * as act from './actions.js';
import * as aff from './ui.js';

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
    aff.displayStatus();
}


window.addEventListener("load", () => {
    bshow.addEventListener("click", (event) => {
        aff.displayStatus();
        alert(act.get());
    });
});

window.addEventListener("load", () => {
    brun.addEventListener("click", (event) => {
        if(act.get()[3] == false && act.get()[1] > 0) {
            act.run();
            aff.log('le monstre court : -1 life');
            aff.displayStatus();
        }
    });
});

window.addEventListener("load", () => {
    bfight.addEventListener("click", (event) => {
        if(act.get()[3] == false && act.get()[1] > 3) {
            act.fight();
            aff.log('le monstre se bat : -3 life');
            aff.displayStatus();
        }
    });
});

window.addEventListener("load", () => {
        bwork.addEventListener("click", (event) => {
            if(act.get()[3] == false && act.get()[1] > 0 ) {
                act.work();
                aff.log('le monstre tavail : -1 life, +2 money');
                aff.displayStatus();
            }
    });
});

window.addEventListener("load", () => {
    beat.addEventListener("click", (event) => {
        if(act.get()[3] == false && act.get()[1] > 0 && act.get()[2] >3) {
            act.eat();
            aff.log('le monstre mange : +2 life, -3 money');
            aff.displayStatus();
        }
    });
});

window.addEventListener("load", () => {
    bsleep.addEventListener("click", (event) => {
        if(act.get()[3] == false && act.get()[1] > 0) {
            act.sleep();
            aff.log('le monstre dort ');
            aff.displayStatus();
            setTimeout(() => {aff.log('le monstre se réveil');aff.displayStatus(); }, 10000);


        }
    });
});