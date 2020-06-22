function calc(...valor) {

    console.log(input);

    input = input[0].split(" ");

    if (valor.includes('+')) {

        return sumar(Number.parseInt(input[0]), Number.parseInt(input[2]));
    }
    else if (valor.includes('-')) {
        return restar(Number.parseInt(input[0]), Number.parseInt(input[2]));
    }
    else if (valor.includes('*')) {
        return mul(Number.parseInt(input[0]), Number.parseInt(input[2]));
    }
    else if (valor.includes('/')) {
        return div(Number.parseInt(input[0]), Number.parseInt(input[2]));
    }
    else {
        return "Error";
    }
}

function sumar(n, n2) {
    return n + n2;
}

function restar(n, n2) {
    return n - n2;
}

function mult(n, n2) {
    return n * n2;
}

function div(n, n2) {
    try {
        return n / n2;
    } catch (Exception) {
        console.error('Error');
    }
}