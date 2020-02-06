import * as act from './actions.js';


export function log(message) {
    let element = document.createElement('p');
    document.getElementById("actionbox").prepend(element);
    let text = document.createTextNode(message);
    element.appendChild(text);
}


export function displayStatus() {
    let status = document.getElementById("status");

    while (status.firstChild) {
        status.removeChild(status.firstChild);
    }

    let a = document.createElement("li");

    let b1 = document.createTextNode("life: " + act.get()[1]);
    a.appendChild(b1);

    let b2 = document.createTextNode(" money: " + act.get()[2]);
    a.appendChild(b2);

    let b3 = document.createTextNode(" awake: " + act.get()[3]);
    a.appendChild(b3);

    status.appendChild(a);
}