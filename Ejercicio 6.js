// ==========================
// EJERCICIO 1
// Saludar nombres
// ==========================

let nombres = prompt("Ingrese nombres separados por espacios:");

let listaNombres = nombres.split(" ");

for (let nombre of listaNombres) {
    document.write("¡Hola " + nombre + "!<br>");
}


document.write("<br>--------------------<br>");


// ==========================
// EJERCICIO 2
// Encontrar menor número
// ==========================

let numeros = prompt("Ingrese números separados por espacios:");

let listaNumeros = numeros.split(" ").map(Number);

let menor = Math.min(...listaNumeros);

document.write("El menor número ingresado es: " + menor);


document.write("<br><br>--------------------<br>");


// ==========================
// EJERCICIO 3
// Sumar números
// ==========================

let numerosSuma = prompt("Ingrese números separados por espacios:");

let listaSuma = numerosSuma.split(" ").map(Number);

let suma = listaSuma.reduce((total, numero) => total + numero, 0);

document.write("La suma de todos los números es: " + suma);


document.write("<br><br>--------------------<br>");


// ==========================
// EJERCICIO 4
// Buscar si existe un valor
// ==========================

let valores = prompt("Ingrese valores separados por espacios:");

let arregloValores = valores.split(" ");

let buscar = prompt("Ingrese valor a buscar:");

if (arregloValores.includes(buscar)) {

    document.write(
        "El valor " + buscar + " se encuentra entre los valores originales"
    );

} else {

    document.write(
        "El valor " + buscar + " no se encuentra entre los valores originales"
    );

}


document.write("<br><br>--------------------<br>");


// ==========================
// EJERCICIO 5
// Buscar índice
// ==========================

let valoresIndice = prompt("Ingrese valores separados por espacios:");

let arregloIndice = valoresIndice.split(" ");

let valorBuscar = prompt("Ingrese valor a buscar:");

let indice = arregloIndice.indexOf(valorBuscar);


if (indice != -1) {

    document.write(
        "El valor " + valorBuscar +
        " se encuentra en el índice " + indice
    );

} else {

    document.write(
        "El valor " + valorBuscar + " no fue encontrado"
    );

}