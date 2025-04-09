document.addEventListener("DOMContentLoaded",function(){
const butt=document.getElementById("botonDeAgregar");
const input=document.getElementById("input");
const lis = document.getElementById("lista")

butt.addEventListener("click", function(){
    const texto = input.value.trim();
    if (texto !== ""){
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = texto;
        lis.appendChild(nuevoElemento);
        input.value("");
    }
})
})