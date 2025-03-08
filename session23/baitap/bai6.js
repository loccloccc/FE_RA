let array=["",false,0,,5,10,"hello world!"]
let arrayT=[];
for(i=0; i<array.length; i++){
    if(array[i]){
        arrayT.push(array[i]);
    }
}
document.writeln(arrayT);

