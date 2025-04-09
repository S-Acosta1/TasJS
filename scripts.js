/*function repeatString (texto, repeticiones)
{
    for (let i=0; i<repeticiones;i++ ){
        console.log(texto+"\n")
    }
}
    */


function reverse(texto) {
    wordReverse="";
    for (let i = texto.length - 1; i > -1; i--) {
        wordReverse+=texto[i];
    }
    console.log(wordReverse);
}