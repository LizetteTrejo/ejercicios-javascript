let arr = ["This", "is", "a", "sentence."];

function printOutString() {
    /* lo imprimimos en el html */
    document.getElementById("join").textContent = arr.join(" ");
    /* lo imprimimos en consola */
    console.log(arr.join(" "));
}

printOutString();
