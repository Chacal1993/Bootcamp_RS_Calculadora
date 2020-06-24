//numeros


document.getElementById("siete").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "7";
});

document.getElementById("ocho").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "8";
});

document.getElementById("nueve").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "9";
});

document.getElementById("uno").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "1";
});

document.getElementById("dos").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "2";
});

document.getElementById("tres").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "3";
});

document.getElementById("cuatro").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "4";
});

document.getElementById("cinco").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "5";
});

document.getElementById("seis").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "6";
});

document.getElementById("cero").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "0";
});

//operaciones



document.getElementById("mas").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "+";
});

document.getElementById("menos").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "-";
});

document.getElementById("por").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "*";
});

document.getElementById("entre").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "/";
});

//resultado

document.getElementById("igual").addEventListener("click", function () {
    let val = document.getElementById("input1").innerHTML;
    document.getElementById("input1").innerHTML = "";
    let r = document.getElementById("input1").innerHTML += operacion(val);

    let operacionHistorico = val + '=' + r;
    console.log(operacionHistorico)

    /*crear un elemento  hijo */
    var node = document.createElement("h4");
    var textnode = document.createTextNode(operacionHistorico);
    node.appendChild(textnode);
    document.getElementById("log").appendChild(node)

    document.getElementById("input1").innerHTML = "";

});

//historico
/* 
document.getElementById("igual").addEventListener("click", function () {
    let resultado = "";
    let val = document.getElementById("input1").innerHTML;
    console.log(val)
    resultado += operacion(val);
    for (let index = 0; index <= 3; index++) {
        document.write(`<h1>${resultado}</h1>`);

    }
});
 */
/* function isLastNumericValueDecimal() {
    // E.g. '3.8+5' becomes ['3.8', '5.8'].
    const values = displayValue.split(
        new RegExp(["\\+", "-", "\\*", "/"].join("|"), "g")
    );
    return values[values.length - 1].includes(".");
} */

//Limpiar pantalla

document.getElementById("borrar").addEventListener("click", function () {
    document.getElementById("input1").innerHTML = "";

});

function operacion(valor) {
    console.log(eval(valor))
    return eval(valor);

}