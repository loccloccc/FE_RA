let choice ;
let arr=[];
let numbArr ;
do {
    choice =  +prompt(`
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm số lớn nhất trong mảng và vị trí của nó
        4. Tính trung bình cộng  các số dương của mảng
        5. Đảo ngược mảng
        6. kiểm trs mảng có đối xứng không
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
                let maxArr = arr[0];
                let vtMax ;
                for (let i = 0; i < arr.length; i++) {
                    if(arr[i] > maxArr){
                        maxArr = arr[i];
                        vtMax = i +1 ;
                    }
                }
                console.log(`phần tử lớn nhất trong mảng là ${maxArr} , nằm ở vị trí ${vtMax}`);
                break;
            case 4:
                let sum = 0;
                let count = 0 ;
                for(let i = 0 ; i < arr.length ; i++){
                    if(arr[i] > 0){
                        sum += arr[i];
                        count++ ;
                    }
                }
                let res = sum / count;
                (count==0) ? console.log(`tbc phần tử dương  trong mảng là : ${res}`) : console.log("trong mảng không có số dương");
                ;
                break;
            case 5:
                arr.reverse();
                console.log("đảo ngược mảng : " , arr);
                break;
            case 6:
                let check = 0;
                for(i=0; i<=(array.length)/2; i++){
                    if(array[i]!=array[array.length-1-i]){
                        check++;
                        break;
                    }
                }
                (check!=0) ? console.log("mang khong doi xung") : console.log("mang doi xung");
                break;
            case 7:
                console.log("thoát chương trình");
                
                break;
            default:
                console.log("không có lựa chọn này");
                
                break;
        }
} while (choice!=7);