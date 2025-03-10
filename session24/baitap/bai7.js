let choice ;
let str ;
do {
    choice = +prompt(`
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
        4. Đảo ngược chuỗi ký tự
        5. Đếm số lượng từ trong chuỗi ký tự
        6. Tìm kiếm và thay thế các ký tự (Do người dùng nhập vào) trong chuỗi gốc.
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
                console.log("độ dài chuỗi : " , str.trim());
                break;
            case 4:
                let strLpit = str.split('');
                console.log(strLpit.reverse());
                break;
            case 5:
                let flag=0;
                let arr = [];
                arr = str.split('');
                console.log(arr);
                for(let i = 0 ; i < arr.length ; i++){
                    if (arr[i] != " ") {
                        flag++;
                    }
                }
                (flag!=0) ? console.log(`có ${flag} kí tự ở trong chuỗi`) : console.log("không có kí tự ở trong chuỗi");
                break;
            case 6:
                let arr2 = [];
                arr2 = str.split('');
                let keySearch = prompt("mời bạn nhập vào kí tự muốn tìm kiếm : ");
                let keyReplace = prompt("mời bạn nhập kí tự muốn thay thế : ");
                let arr3 = [];
                console.log(arr2);
                for(let i = 0 ; i < arr2.length ; i++){
                    (arr2[i] === keySearch) ? arr3.push(keyReplace) : arr3.push(arr2[i]);
                }   
                console.log(arr3);
                    break;
            case 7:
                
                break;
            default:
                break;
        }
} while (choice!=7);