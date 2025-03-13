let choice , n , med = 0 ;
let arr = [];

do {
  choice = +prompt(`
        1.Nhập danh sách số nguyên.
        2.Tính trung bình các số.
        3.Tìm số chẵn lớn nhất.
        4.Tìm số lẻ nhỏ nhất.
        5.Thoát.
        Lựa chọn của bạn.`);
  switch (choice) {
    case 1:
        inputNumber();
      break;
    case 2:
        mediumNumber(arr); 
      break;
    case 3:
        maxEven(arr);
      break;
    case 4:
        minOld(arr);
      break;
    case 5:
        console.log("thoát");
      break;
    default:
        console.log("lỗi");
      break;
  }
} while (choice != 5);

function inputNumber() {
    n = +prompt("mời bạn nhập độ dài mảng : ");
    for(let i = 0 ; i < n ; i++){
        arr[i] = +prompt("mơi bạn nhập : ");
        if (!Number.isInteger(arr[i])) {
            alert("lỗi , mời bạn nhập lại ");
            i--;
        }
    }
    return arr;
}

function mediumNumber(arr) {
    console.log(arr);
    for(let i = 0 ; i < arr.length ; i++){
        med += arr[i];
    }
    console.log("tbc", med/arr.length);
}

function maxEven(arr) {
    let maxEvenNumb = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]%2==0){
            if(arr[i] > maxEvenNumb){
                maxEvenNumb = arr[i]
            }
        }
    }
    console.log("maxEven",maxEvenNumb);
}

function minOld(arr) {
    let minOldNumb = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]%2 != 0){
            if(arr[i] < minOldNumb){
                minOldNumb = arr[i]
            }
        }
    }
    console.log("minOld",minOldNumb);
}
