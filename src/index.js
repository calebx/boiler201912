import "./index.scss";

function component() {
    const elem = document.createElement("h1");
    elem.innerHTML = "hola, yoyo.";
    return elem;
}

document.body.appendChild(component());
console.log(["hi", "nothing"].join(", "));
