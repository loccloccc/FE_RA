let answer;
let arr = [];
let numbArr;
do {
    answer = +prompt(`
        1.Nhập mảng 
        2.In mảng  
        3.Tìm phần tử lớn nhất trong mảng
        4.Tính tổng phần tử trong mảng  
        5.Tìm số lần xuất hiện cuả 1 phần tử trong mảng  
        6.Sắp mảng tăng dần  
        7 . Thoát chương trình
        lựa chọn của bạn : `);
    switch (answer) {
        case 1:
            numbArr = +prompt("mời bạn nhập độ dài của mảng : ");
            if (Number.isInteger(numbArr) && numbArr>0) {
                for (let i = 0; i < numbArr; i++) {
                    arr[i] = +prompt(`phần tử thứ ${i+1} cuẩ mảng : `);
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
            let maxArr = arr[0];
            for (let i = 0; i < arr.length; i++) {
               if (arr[i] > maxArr) {
                    maxArr = arr[i];
               }
            }

            console.log("max : " , maxArr);
            break;
        case 4:
            let sum = 0 ;
            for(let i = 0 ; i < arr.length ; i++){
                sum += arr[i];
            }
            console.log(`tổng : ${sum}`);
            break;
        case 5:
            let flag = 0 ;
            let key = +prompt("mời bạn nhập kí tự muốn tìm : ");
            for (let i = 0; i < arr.length; i++) {
                if(arr[i] == key){
                    flag++;
                }
            }
            console.log(`phần tử ${key} xuất hiện ${flag} lần.`);
            break;
        case 6:
            console.log("sắp xếp mảng theo trình tự tăng dần là :");
            for(let i = 0 ; i < arr.length ; i++){
                for(let j = i+1 ; j < arr.length ; j++){
                    if(arr[i] > arr[j]){
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            for(let i = 0 ; i < arr.length ; i++){
                console.log(arr[i]);
            }
            
            break;
        case 7:
            console.log("thoát chương trình");
            break;
        default:
            console.log("không có lựa chọn này.");
            break;
    }
} while (answer != 7);
