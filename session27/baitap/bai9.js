let array=[5, 8, 6, 3, 4, 2, 7];
sortEven(array);
function sortEven(array){
    let even=[];
    let count=0;
    let newArr=[];
    if(Array.isArray(array)){
        for(i=0; i<array.length; i++){
            if(array[i]%2==0){
                even.push(array[i]);
            }
        }
        even.sort();
        for(i=0; i<array.length; i++){
            if(array[i]%2==0){
                newArr.push(even[count])
                count++;
            } else{
                newArr[i]=array[i];
            }
        }
        console.log(newArr);
    } else{
        console.log("du lieu khong hop le");
    }
}