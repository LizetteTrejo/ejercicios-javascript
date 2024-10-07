/* 
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

/* filter crea un array nuevo, en donde va a filtrar el curso que se busca en student2Courses */
let cursosComunes = student1Courses.filter(curso => student2Courses.includes(curso));
/* Si lo incluye, entonces es lo que contendrá el nuevo array */

/* lo imprimimos en el html */
document.getElementById("filterIncludes").textContent = ("Los cursos en común entre ['Math', 'English', 'Programming'] y ['Geography', 'Spanish', 'Programming'] son: ") + cursosComunes;
/* lo imprimimos en consola */
console.log(cursosComunes);