let a = Number(prompt("mời bạn nhập số nguyên : "));
let b = Number(prompt("mời bạn nhập số lũy thừa : "));
let res = 1 ;
if(Number.isInteger(a) && Number.isInteger(b) && a != 0 ){
    for(let i = 1 ; i <= Math.abs(b) ; i++){
        b > 0 ? res *= a : res *= 1/a;
    }
    document.write(res);
}else{
    document.write("Không hợp lệ");
}
