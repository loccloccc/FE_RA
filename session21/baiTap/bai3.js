let passWord = 12345 ;
let copy_passWord = Number(prompt("mời bạn nhập mk (5 chữ số): "));
if(Number.isInteger(copy_passWord) && (copy_passWord >= 10000 && passWord <= 99999 )){
    if(passWord == copy_passWord){
        document.write("bạn đã nhập đúng mật khẩu");
    }else{
        document.write("bạn nhập không đúng mật khẩu.");
    }
}else{
    document.write("bạn không nhập đúng định dạng");
}
