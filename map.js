/* Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
 */

let array= [1, 2, 4, 5];
function doubleArray(arr) {
    /* .map crea un nuevo array */
    let array2 = arr.map(num => num*2);
    /* lo imprimimos en el html */
    document.getElementById("map").textContent = array2.join();
    /* lo imprimimos en consola */
    console.log(array2);
}

doubleArray(array);