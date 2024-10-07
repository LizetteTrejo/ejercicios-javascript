/* For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
 */

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

/* Imprime todas las personas */
document.getElementById("array").textContent = ("La personas son: ") + people;
console.log(people);

/* Quitamos Dami */
people.splice(1, 1);
document.getElementById("arraySinDani").textContent = ("La personas sin Dani son: ") + people;
console.log(people);

/* Quitamos Dami */
people.splice(2, 1);
document.getElementById("arraySinJuan").textContent = ("La personas sin Juan son: ") + people;
console.log(people);

/* Quitamos Luis y lo agregamos al inicio */
people.splice(1, 1);
people.unshift("Luis");
document.getElementById("arrayJuanInicio").textContent = ("La personas con Juan al inicio son: ") + people;
console.log(people); 

/* Agregamos Lizzz */
people.push("Lizzz");
document.getElementById("arrayConLiz").textContent = ("La personas con Liz son: ") + people;
console.log(people);

/* Imprime "María" cuando encuentra el nombre y sale de la iteración */
for (let i = 0; i<people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
        break;
    }
}

/* Con indexOf selecciona el indice de Maria */
let indiceMaria = people.indexOf("Maria");
document.getElementById("arrayIndiceMaria").textContent = ("El índice de Maria es: ") + indiceMaria;
console.log("El índice de Maria es: " + indiceMaria)

