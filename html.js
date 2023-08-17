function sumaDeNumerosPares(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            suma += arr[i];
        }
    }
    return suma;
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 10, 2];
console.log(sumaDeNumerosPares(numeros)); // Salida: 20 (2 + 4 + 6 + 8)

function obtenerNombresMayoresDe30(peopleMap) {
    const nombres = [];
    for (let [nombre, edad] of peopleMap) {
        if (edad > 15) {
            nombres.push(nombre);
        }
    }
    return nombres;
}
const personas = new Map([
    ['John', 28],
    ['Alice', 35],
    ['Santino', 33],
    ['Bob', 42],
    ['Emily', 25],
]);
console.log(obtenerNombresMayoresDe30(personas)); // Salida: ['Alice', 'Bob']

function encontrarElementosComunes(arr1, arr2) {
    const conjuntoComun = new Set();
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            conjuntoComun.add(arr1[i]);
        }
    }
    return conjuntoComun;
}
const array1 = [1, 2, 3, 4, 5, 8];
const array2 = [4, 5, 6, 7, 8];
console.log(encontrarElementosComunes(array1, array2)); // Salida: Set { 4, 5 }