/*Objetivo: Crear un contador que aumente cada vez que se hace clic en un botón.
Instrucciones:
•	Crear un archivo HTML con un elemento <p> con el número 0.
•	Añadir un botón con el texto "Incrementar".
•	Al hacer clic en el botón, el número dentro del <span> debe incrementarse en uno.
*/

document.addEventListener("DOMContentLoaded",function(){
    const butt=document.getElementById("boton");
    const span=document.getElementById("span");
    
    butt.addEventListener("click", ()=>{
        (span.textConten)= span.textContent.value


    })
    })