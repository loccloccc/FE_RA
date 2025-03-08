let arr = [];
let n = Number(prompt("mời bạn nhập số lượng phần tử : "));
if(Number.isInteger(n) ){
  if (Number.isInteger(n) ) {
    if (n > 0) {
      console.log(`mời bạn nhập ${n} phần tử vào mảng : `);
    for (let i = 0; i < n; i++) {
      arr[i] = prompt(`phần tử thứ ${i + 1} :`);
    }
    console.log(arr);
    console.log("kí tự số trong mảng là : ");
    for (let i = 0; i < n; i++) {
      if (Number(arr[i])) {
        console.log(arr[i]);
      }
    }
    } else if (n == 0) {
      console.log("không có kí tự số");
    } 
  }
}else{
    console.log("số lượng nhập vào không hợp lệ");   
}