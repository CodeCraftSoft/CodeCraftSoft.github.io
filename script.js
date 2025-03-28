// añadir el valor del boton al display
function add (value) {
    document.getElementById('display').value += value;
}

function clearScreen () {
    document.getElementById('display').value = '';
}

function result () {
    const valueScreen = document.getElementById('display').value;
    const result = eval(valueScreen);
    document.getElementById('display').value = result;
}

const array = ["rojo", "azul", "verde"];

document.getElementById('title').innerHTML = array;