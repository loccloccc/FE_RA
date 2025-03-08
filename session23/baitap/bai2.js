let arr = [1,2,3,6,4,8,10,5,8,4];
let max = arr[0];
let luuTru ;
let i ;
for ( i = 0 ; i < arr.length ; i++) {
    if(arr[i] > max){
        max = arr[i];
        luuTru = i ;
    }
}
console.log(`số lớn nhất trong mảng là : ${max} và nằm ở vị trí thứ ${luuTru + 1}`);
