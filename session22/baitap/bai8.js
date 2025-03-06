let arr = [2,4,3,6,5,8,6,2,4,9];
let maxCount = 0, maxItem = arr[0] ;
for( let i = 0 ; i < arr.length ; i++){
    let count=0;
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[i] == arr[j]){
            count++;
        } 
    }
    if(count>maxCount){
        maxCount == count;
        maxItem ==arr[i];
    }else if (count === maxCount && arr[i] < maxItem) {
        maxItem = arr[i]; // Cập nhật phần tử nhỏ nhất nếu có cùng số lần xuất hiện
    }
}
console.log("số xuất hiện nhiều nhất là : " , maxItem);



