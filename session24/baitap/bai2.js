let choice ;
let arr=[];
let numbArr ;
do {
    choice =  +prompt(`
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm các phần tử chẵn và lẻ
        4. Tính trung bình cộng của mảng
        5. Xóa phần tử tại vị trí chỉ định
        6. Tìm phần tử lớn thứ hai trong mảng
        7. Thoát chương trình
        Lựa chọn của bạn`);
        switch (choice) {
            case 1:
                numbArr = +prompt("mời bạn nhập độ dài của mảng : ");
                if (Number.isInteger(numbArr) && numbArr>0) {
                    for (let i = 0; i < numbArr; i++) {
                        arr[i] = +prompt(`phần tử thứ ${i+1} của mảng : `);
                    }
                }
                else{
                    console.log("không hợp lệ");
                }    
                break;
            case 2:
                console.log("các phần tử trong mảng là : ");
                for (let index = 0; index < arr.length; index++) {
                    console.log(arr[index]);
                }
                break;
            case 3:
                console.log("phần tử chẵn trong mảng");
                for (let i = 0; i < arr.length; i++) {
                    if(arr[i]%2==0){
                        console.log(arr[i]);
                    }
                }
                console.log("phần tử lẻ trong mảng");
                for (let i = 0; i < arr.length; i++) {
                    if(arr[i]%2!=0){
                        console.log(arr[i]);
                    }
                }
                break;
            case 4:
                let sum = 0;
                for(let i = 0 ; i < arr.length ; i++){
                    sum += arr[i];
                }
                let res = sum / arr.length;
                console.log(`tbc trong mảng là : ${res}`);
                break;
            case 5:
                let key = +prompt("mời bạn nhập vị trí bạn muốn xóa : ");
                
                arr.splice(key,1)
                
                console.log(arr);
                break;
            case 6:
                arr.sort();
                console.log(`phần tử lớn thứ 2 trong mảng là ${arr[arr.length-2]}`);
                break;
            case 7:
                console.log("thoát chương trình");
                
                break;
            default:
                console.log("không có lựa chọn này");
                
                break;
        }
} while (choice!=7);