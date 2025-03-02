let a = Number(prompt("Mời bạn nhập số a : "));
let b = Number(prompt("Mời bạn nhập số b : "));
let operation = prompt("mời bạn chọn phép tính + - * / :");
if (operation == "+"){
    let cong = a+b;
    alert("a + b = "+cong);
}else if (operation == "-") {
    let tru = a-b;
    alert("a - b = "+tru);
}else if(operation == "*" ){
    let nhan = a*b;
    alert("a * b = " + nhan);
}else if (operation == "/") {
    let chia = a/b ;
    alert("a / b = "+chia);
}else{
    alert("không có phép tính " + operation +" này ");
}

