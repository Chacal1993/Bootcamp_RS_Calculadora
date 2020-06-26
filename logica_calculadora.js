const teclearNums = (valor) => {
    //lo que hay hasta ese momento en el input de la calculadora
    let val = document.getElementById("input1").innerHTML;
    //ultima operacion realizada
    let cadena = document.getElementById("input1").innerHTML += valor;
    //actualizando el valor 
    document.getElementById("input").innerHTML = cadena;
    let result = "";
    let operTerminada = "";
    if (valor === 'C') {
        limpiar();
        document.getElementById("input").innerHTML = "";
    }
    if (valor === '=') {
        result += operacion(val);
        operTerminada = document.getElementById("input1").innerHTML += result;
        limpiar();
        document.getElementById("input1").innerHTML += result;
        crearHistorico(operTerminada);
    }
}

const crearHistorico = (cadena) => {
    var node = document.createElement("p");
    var textnode = document.createTextNode(cadena);
    node.appendChild(textnode);
    document.getElementById("hst").appendChild(node)
}

const mostrarHistorico = () => {
    const element = document.getElementById("hst").classList;
    if (element.contains("active")) {
        console.log("tengo la clase active")
        element.remove("active")
    } else {
        console.log("NO tengo la clase active");
        element.add("active")

    }

}

const limpiar = () => {
    document.getElementById("input1").innerHTML = "";

}
const operacion = (oper) => {
    //console.log(eval(oper))
    return eval(oper);
}
/* document.getElementById("siete").addEventListener("click", function () {
    document.getElementById("input1").innerHTML += "7";
}); */