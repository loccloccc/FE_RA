let array=["2025-03-10", "2024-12-25", "2023-07-01"];
if(Array.isArray(array)){
    console.log(converter(array));
} else{
    console.log("du lieu khong hop le");
}
function converter(array){
    newArr=[];
    for(i=0; i<array.length; i++){
        newArr[i]=array[i].slice(-2) + "/" + array[i].slice(5,7) + "/" + array[i].slice(0,4);
    }
    return newArr;
}