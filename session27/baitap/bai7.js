findMissing();
function findMissing(){
    let arr = [];
    let n = +prompt("mời bạn nhập số lượng phần tử ");
    for(let i = 0 ; i < n ; i++){
        arr[i] = +prompt(`nhập ${i+1} : `);
    }
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i]  = arr[j];
                arr[j] = temp;
             }
        }
    }
    console.log(arr[0] ," , " ,arr[arr.length-1]);
    let arr2 = [];
    for(let i = arr[0] ; i <= arr[arr.length-1] ; i++ ){
        arr2.push(i);
    }
    console.log(arr2);
}