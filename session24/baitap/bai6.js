let choice ;
let str ;
do {
    choice = +prompt(`
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Tính độ dài của chuỗi
        4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
        5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
        6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
        7. Thoát chương trình
        Lựa chọn của bạn : `);
        switch (choice) {
            case 1:
                str = prompt("mời bạn nhập chuỗi : ");
                break;
            case 2:
                console.log(`in chuỗi ${str}`);
                break;
            case 3:
                console.log("độ dài chuỗi : " , str.length);
                break;
            case 4:
                let arr = [];
                arr = str.split('');
                let key = prompt("mời bạn nhập kí tự muốn tìm:");
                let check = 0 
                for(let i = 0 ; i < arr.length ; i++){
                    if(arr[i] == key){
                        check++;
                    }
                }
                console.log(`kí tự ${key} xuất hiện ${check} lần trong mảng `);
                break;
            case 5:
                let flag=0;
                for(i=0; i<=(arr.length)/2; i++){
                    if(arr[i]!=arr[arr.length-1-i]){
                        flag++;
                        break;
                    }
                }
                (flag!=0) ? console.log("mang khong doi xung") : console.log("mang doi xung");
            
                break;
            case 6:
                let a = str.split(" ");
                let a1 = [];
                for(let i =0 ; i < a.length ; i++){
                    a1.push(a[i].charAt(0).toUpperCase() + a[i].slice(1));
                }
                let b = a1.join(" ");
                console.log(b);
                    break;
            case 7:
                console.log("thoát chương trình");
                break;
            default:
                console.log("không có sự lựa chọn này.");
                break;
        }
} while (choice!=7);