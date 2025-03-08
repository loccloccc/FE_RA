let answer;
let numb;
let arr = [];
do {
  answer = +prompt(`
        1. Nhập số phần tử cần nhập và giá trị các phần tử 
        2. In ra giá trị các phần tử đang quản lý 
        3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
        4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng 
        5. In ra các số nguyên tố trong mảng và tính tổng 
        6. Nhập một số và đếm số lần xuất hiện trong mảng 
        7. Thêm một phần tử vào vị trí chỉ định 
        8. Xóa một phần tử theo giá trị 
        9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần 
        0. Thoát 
        Lựa chọn của bạn :`);
  switch (answer) {
    case 1:
      numb = +prompt("mời bạn nhập số lượng phần tử : ");
      for (let i = 0; i < numb; i++) {
        arr[i] = +prompt(`phần tử thứ ${i + 1} : `);
      }
      break;
    case 2:
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
      break;
    case 3:
      console.log("các phần tử chẵn trong mảng là : ");
      let sum = 0;
      let evenArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
          console.log(arr[i]);
          sum += arr[i];
          evenArr.push(arr[i]);
        }
      }
      console.log(`tổng là : ${sum}`);
      evenArr.sort();
      evenArr.reverse();
      console.log(evenArr);
      break;
    case 4:
      //In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng
      let max = arr[0],
        vtMax;
      let min = arr[0],
        vtMin;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
          vtMax = i + 1;
        }
      }
      console.log(`max: ${max} ở vị trí: ${vtMax}`);
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] < min) {
          min = arr[j];
          vtMin = j + 1;
        }
      }
      console.log(`min: ${min} ở vị trí: ${vtMin}`);

      break;
    case 5:
      let primeSum = 0;
      let primeArr = [];
      for (i = 0; i < arr.length; i++) {
        let check = 0;
        for (j = 2; j < arr[i] ** (1 / 2); j++) {
          if (arr[i] % j == 0) {
            check++;
            break;
          }
        }
        if (check == 0 && arr[i] != 1) {
          primeArr.push(arr[i]);
          primeSum += arr[i];
        }
      }
      console.log("cac so nguyen to la: " + primeArr);
      console.log("tong cac to nguyen to la: " + primeSum);
      break;
    case 6:
      let keyArr = +prompt("mời bạn nhập số : ");
      let check = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == keyArr) {
          check++;
        }
      }
      check != 0
        ? console.log(`số ${keyArr} xuất hiện ${check} trong mảng`)
        : console.log("");
      break;
    case 7:
      let addNumber = +prompt("mời bạn nhập số muốn thêm : ");
      let index = +prompt("mời bạn nhập vị trí muốn thêm ");
      arr.splice(index, 0, addNumber);
      console.log(arr);
      break;
      break;
    case 8:
        let deleteValue = +prompt("mời bạn nhập giá trị muốn xóa");
        for(let i = 0 ; i < arr.length ; i++){
            if (arr[i] == deleteValue) {
                arr.splice(i,1);
            }
        }
        console.log(arr);
      break;
    case 9:
        arr.sort();
        console.log(`tăng dần ${arr}`);
        console.log(`giảm dần ${arr.reverse}`);
      break;
    default:
        console.log("không có sự lựa chọn này .");
        
      break;
  }
} while (answer != 0);
