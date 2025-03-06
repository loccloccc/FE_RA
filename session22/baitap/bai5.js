let arr = [2,4,5,6,7];
let sumOdd = 0 , sumEven = 0 ;
for(let i =0 ; i < arr.length ; i++){
    (arr[i]%2==0)?sumEven += arr[i] : sumOdd += arr[i];
}
console.log(`tổng số chẵn là : ${sumEven} , tổng số lẻ là : ${sumOdd}`);



