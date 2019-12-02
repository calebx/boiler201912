import _ from "lodash";
import "./index.scss";

function component() {
    const elem = document.createElement("h1");
    elem.innerHTML = "hola, yoyo.";
    return elem;
}

document.body.appendChild(component());
console.log(_.join(["hi", "nothing"]));

var sym = Symbol();

var promise = Promise.resolve();

var check = arr.includes("yeah!");

console.log(arr[Symbol.iterator]());
