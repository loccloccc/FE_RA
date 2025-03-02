let user = prompt("Mời bạn nhập tên đăng nhập");
let pass;
if(user == `ADMIN`){
    pass = prompt("mời bạn nhập mật khẩu :");
    if (pass="TheMaster") {
        document.write("Welcome");
    }
    else if (pass == " ") {
        document.write("Cancelled");
    } else {
        document.write("Wrong password");
    }
}
else if(user ==`null`){
    document.write("Cancelled");
}
else{
    document.write("I Don’t know you");
}