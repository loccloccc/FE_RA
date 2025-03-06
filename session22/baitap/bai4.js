let str = +prompt("mời bạn nhập : ");
let arr = [];
if(Number.isInteger(str)){
    let a = String(str)
    arr = a.split("");
    arr.sort();
    console.log(arr);
    console.log(arr[arr.length-1]," là số lớn nhất trong mảng");    
    
}else{
    console.log("dãy nhập vào không hợp lệ");

}
