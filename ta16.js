/*Objetivo: Mostrar y ocultar un elemento al hacer clic en un botón.
Instrucciones:
•	Crear un archivo HTML con un elemento <p>, con un texto cualquiera.
•	Añadir un botón que diga "Mostrar/Ocultar".
•	Al hacer clic en el botón, el párrafo debe ocultarse si está visible y mostrarse si está oculto
 */

document.addEventListener("DOMContentLoaded",function(){
    const butt=document.getElementById("boton");
    const parrafo=document.getElementById("parrafo");
    
    butt.addEventListener("click", ()=>{
        const visible= parrafo.checkVisibility? parrafo.checkVisibility(): parrafo.style.display !== "none"
        if (visible){

parrafo.style.display = "none"        
            lis.appendChild(nuevoElemento);
            input.value("");
        }
        else{
            parrafo.style.display = "block";
        }
    })
    })