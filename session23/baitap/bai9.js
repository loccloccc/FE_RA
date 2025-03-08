let array=[];
let choice;
do{
    choice=+prompt(`
        
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra giá trị các phần tử chẵn và tính tổng
        4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
        5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
        6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
        7.Thêm một phần từ vào vị trí chỉ định
        8.Thoát
        
        `);
    switch(choice){
        case 1:
            array=[];
            let inputNumber=+prompt("mời bạn nhập số lượng phần tử : ");
            for(let i=0; i<inputNumber; i++){
                array[i]=+prompt("nhập vị trí các phần tử " + (i+1));
            }
            break;
        case 2:
            console.log("phần tử trong mảng");
            console.log(array);
            break;
        case 3:
            let sum = 0 ;
            console.log("các giá trị chẵn trong mảng là :");
            for (let i = 0; i < array.length; i++) {    
                if(array[i]%2==0){
                    console.log(array[i]);
                    sum += array[i];
                }
            }
            console.log(`tổng là : ${sum}`);
            break;
        case 4:
            let sort = array.sort();
            console.log(`số lớn nhất trong mảng là : ${array[array.length-1]}`);
            console.log(`số bé nhất trong mảng là : ${array[0]}`);
            break;
        case 5:
            let primeSum=0;
            let primeArr=[];
            for(i=0; i<array.length; i++){
                let check=0;
                for(j=2; j<array[i]**(1/2); j++){
                    if(array[i]%j==0){
                        check++;
                        break
                    }
                }
                if(check==0 && array[i]!=1){
                    primeArr.push(array[i]);
                    primeSum+=array[i];
                }
            }
            console.log("cac so nguyen to la: " + primeArr);
            console.log("tong cac to nguyen to la: " + primeSum);
            break;
        case 6 :
            //nhập vào 1 số và xem có bnh số đấy trong mảng 
            let keyArr = +prompt("mời bạn nhập số : ");
            let check = 0 ;
            for(let i = 0 ; i < array.length ; i++){
                if (array[i] == keyArr) {
                    check++;
                }
            }
            (check!=0) ? console.log(`số ${keyArr} xuất hiện ${check} trong mảng`): console.log("");
            break;
        case 7 : 
        //thêm 1 số vào vị trí chiwr định
            let addNumber = +prompt("mời bạn nhập số muốn thêm : ");
            let index = +prompt("mời bạn nhập vị trí muốn thêm ");
            array.splice(index,0,addNumber);
            console.log(array);
            break;
        case 8:
            console.log("da thoat chuong trinh");
            break;
        default:
            console.log("không có lựa chọn này ");
            
    }
} while(choice!==8);
