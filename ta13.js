/*
TA 13
Objetivo: Cambiar el texto de un elemento al hacer clic en un botón.
Instrucciones:
•	Crear un archivo HTML con un elemento <p> que tenga el texto "Texto original".
•	Añadir un botón con el texto "Cambiar texto".
•	Al hacer clic en el botón, el texto del párrafo debe cambiar a "Texto cambiado".
*/
function cambiarTexto(){
    if(document.getElementById("parrafo").textContent === "Texto cambiado"){
        document.getElementById("parrafo").textContent = "Texto original";
    }
    else{
        document.getElementById("parrafo").textContent = "Texto cambiado";
    }
}