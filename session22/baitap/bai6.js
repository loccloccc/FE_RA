let arr = [2,5,-3,1,6,7,9,5,2,5];
let num = +prompt("mời bạn nhập : ")
let check = 0 ;
if(Number.isInteger(num)){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == num){
            check++;
        }
    }
    (check != 0 ) ? console.log(`số ${num} xuất hiện ${check} lần.`) : console.log(`không có số ${num} trong mảng`);
    ;
    
}else{
    console.log("bạn không nhập đúng định dạng");
    
}
