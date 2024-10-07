/* Write a program to compute the sum and product (multiplication)
of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */

let arrayReduce = [1, 2, 3, 4];

/* se inicializa en 0 porque haría 0+1+2+3+4*/
const inicio = 0;
/* Sintaxis de reduce: arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial]) */
const suma = arrayReduce.reduce(
  (acumulado, valorActual) => acumulado + valorActual,
);

const producto = arrayReduce.reduce(
    (acumulado, valorActual) => acumulado * valorActual,
  );

  
/* lo imprimimos en el html */
document.getElementById("reduceSuma").textContent = ("La suma de [1, 2, 3, 4] es: ") + suma;
/* lo imprimimos en consola */
console.log(suma);

/* lo imprimimos en el html */
document.getElementById("reduceProducto").textContent = ("El producto de [1, 2, 3, 4] es: ") + producto;
/* lo imprimimos en consola */
console.log(producto);
