// Escriba una función que tome una matriz de números enteros como parámetro y
// devuelva la suma de todos los números pares dentro de la matriz.


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function numerosEnteros(numeros) {
    let suma = 0
    for (var i = 0; i < numeros.length; i++){
        if (numeros[i] %2 == 0) {
            suma += numeros[i] 
        }
    }
    console.log(suma);
    return suma;

}

numerosEnteros(numeros);