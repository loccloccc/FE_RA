let choice  , length ;
let arr2 = [];
let check = false;
let kiTuDacBiet = "~!@#$%^&*-_=+.*/?><,:;" , chuVietHoa = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let test1=kiTuDacBiet.split("");
let test2=chuVietHoa.split("");
function main() {
    do {
        choice = +prompt(`
            1.Đăng kí ngườ dùng mới.
            2.Đăng nhập người dùng.
            3.Thoát.
            Lựa chọn của bạn : `);
        switch (choice) {
            case 1:
                signUp(arr2);
                break;
            case 2:
                signIn(arr2);
                break;
            case 3 :
                console.log("thoát");
                break;
            default:
                console.log("không có lựa chọn này");
                break;
        }
    } while (choice!=3);
}

function signUp(a) {
    let name = prompt("mời bạn nhập tên : ");
    let email ;
    do {
        email = prompt("mời bạn nhập email : ");
        if(!email.includes("@") && (!email.endsWith(".com") || !email.endsWith(".vn"))){
            alert("email bạn nhập không đúng định dạng");
        }
    } while (!email.includes("@") && (!email.endsWith(".com") || !email.endsWith(".vn")));
    let pass ;
    do {
        let pass = prompt("Mời nhập mật khẩu: ");
        if (test1.some(symbol => pass.includes(symbol)) && test2.some(letter => pass.includes(letter))) {
            check = true;
        }
        if (check==false) {
            alert("Mật khẩu phải chứa ít nhất một ký tự đặc biệt và một chữ cái viết hoa.");
        }
    } while (check==false);
    let listEmail = {
        name : name,
        email : email,
        pass : pass,
    }
    arr2.push(listEmail);
    console.log(arr2);
}

function signIn(a) {
    let email = prompt("mời bạn nhập email : ");
    let pass = prompt("mời bạn nhập mật khẩu : ");
    let check = 0 ;
    for (let i = 0; i < a.length; i++) {
       if(email == a[i].email && pass == a[i].pass){
            check++;
            return ;
       }
    }
    (check!=0) ? console.log("đăng nhập thành công") : console.log("đăng nhập không thành công");
}

main();