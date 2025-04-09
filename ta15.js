/*TA 15
Objetivo: Eliminar un elemento específico de la lista.
Instrucciones:
•	Usando una copia del HTML anterior,  agregar un botón "Eliminar último elemento".
•	Al hacer clic en el botón, se debe eliminar el último <li> de la lista
 */

document.addEventListener("DOMContentLoaded", function () {
    const butt = document.getElementById("botonDeAgregar");
    const butt2 = document.getElementById("botonDeEliminar")
    const input = document.getElementById("input");
    const lis = document.getElementById("lista");

    butt.addEventListener("click", function () {
        const texto = input.value.trim();
        if (texto !== "") {
            const nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = texto;
            lis.appendChild(nuevoElemento);
            input.value="";
        }
    })

    butt2.addEventListener("click", function () {
        const textoAEliminar = input.value.trim().toLowerCase();
        if (textoAEliminar !== "") {
            const items = lis.getElementsByTagName("li")
            let eliminado = false;
            for (let i = 0; i<items.length ; i++){
                if (items[i].textContent.toLowerCase()===textoAEliminar){
                    lis.removeChild(items[i]);
                    eliminado=true;
                    break;
                }
                
            }
            if (!eliminado){
                alert("Elemento no encontrado en la lista")
            }
            input.value = "";
        }
    })
})