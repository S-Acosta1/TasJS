function removeFromArray (arreglo, item){
    itemStr=String(item);
    for (let i=0; i < arreglo.length;i++){
        if (itemStr===String(arreglo[i])){
            arreglo.splice(i,1);
        }
    }
    console.log(arreglo);
}