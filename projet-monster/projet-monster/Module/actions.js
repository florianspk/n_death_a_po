(function () {

    let name ;
    let life ;
    let money;
    let awake;

    export function get() {
        return awake;
    }

    export function init(n, l, m, a){
        name = n;
        life =l;
        money =m;
        awake =a;
    }


});