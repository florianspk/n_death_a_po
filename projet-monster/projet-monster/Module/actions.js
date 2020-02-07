
    let fnc;
    let name ;
    let life ;
    let money;
    let awake;


    export function init(n, l, m, a){
        name = n;
        life =l;
        money =m;
        awake =a;
    }

    export function get() {
    let tab = [name, life, money, awake];
    return tab;
    }

    export function run(){
        fnc =1;
        if(awake == false && life > 0) {
            life = life - 1;
        }
    }

    export function fight(){
        fnc=2;
        if(awake === false && life > 3) {
            life = life - 3;
        }
    }

    export function work(){
        fnc =3;
        if(awake === false && life > 0) {
            life = life - 1;
            money = money + 2;
        }
    }

    export function eat(){
        fnc=4;
        if(awake === false && life > 0 && money > 3) {
            money = money - 3;
            life = life + 2;
        }
    }


    export function sleep(){
        fnc=5;
        awake = true;
        setTimeout(() => {
            awake = false;
            life++; }, 10000);
    }

    export function kill(){
        life = 0;
        money = 0;
        name = '';
        awake = false;
    }

    export function newlife(){
        init('flo', 20 , 10, false );
    }


    export function automatic(){
        life--;
        let etp =   Math.floor(Math.random() * (5 - 1 +1)) + 1;
        if(etp==1){
            run();
        }
        if (etp==2){
            fight();
        }
        if (etp==3){
            work();
        }
        if (etp==4){
           eat();
        }
        if (etp==5){
            sleep();
        }
    }



    export function showStatus(){
    let tl =0;
    let elt = document.getElementById('monster');
    if(life < 5){
        elt.style.backgroundColor = "red";
    }
    if(life > 5 && life < 10){
        elt.style.backgroundColor  = "orange";
    }
    if(life > 10 && life < 15 ){
        elt.style.backgroundColor = 'blue';
    }
    if(life > 15){
        elt.style.backgroundColor ='lightgreen';
    }
    tl = money/3+"px";
    console.log(tl);
    elt.style.borderWidth = tl;
    }