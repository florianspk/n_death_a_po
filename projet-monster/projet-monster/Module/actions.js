

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
        return awake;
    }

    export function run(){
        if(awake === false || life > 2) {
            life = life - 1;
        }
    }

    export function fight(){
        if(awake === false || life > 2) {
            life = life - 3;
        }
    }

    export function work(){
        if(awake === false || life > 2) {
            life = life - 1;
            money = money + 2;
        }
    }

    export function eat(){
        if(awake === false || life > 2 || money > 4) {
            money = money - 3;
            life = life + 2;
        }
    }



    export function sleep(){

        awake = true;
        setTimeout(() => awake = false, 10000);
    }
