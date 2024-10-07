/* Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]
 */

const ordenarNumeros = [3, 6, 12, 5, 100, 1];
/* .sort ayuda a ordenar los elementos de un arreglo */
ordenarNumeros.sort(function (a, b) {
    /* Va a comparar si es <, >, = */
    return a - b;
});
document.getElementById("ordenar").textContent = ("El arreglo [3, 6, 12, 5, 100, 1] ordenado es: [") + ordenarNumeros.join(", ")+ ("]");
console.log(ordenarNumeros);