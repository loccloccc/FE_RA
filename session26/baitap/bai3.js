function checkEmail() {
    let email = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
    if(Array.isArray(email)){
        let  check = email.filter((i) => {
            return i.includes("@")  && !i.includes(" "); 
        })
        console.log(check);
        
    }else{
        console.log("dữ liệu nhập vào không hợp lệ");
        
    }
}
checkEmail();