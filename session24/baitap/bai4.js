let answer ;
let arr = [[] , []];
let lengthArr ; 
do {
    answer = +prompt(`
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5. Tính trung bình cộng các phần tử của một hàng cụ thể
        6. Đảo ngược các hàng trong mảng
        7. Thoát chương trình
        Lựa chọn của bạn .`);
    switch (answer) {
        case 1: 
            let rows = prompt("Nhập số lượng hàng: ");
            let cols = prompt("Nhập số lượng cột: ");
            array2D = [];

            for (let i = 0; i < rows; i++) {
                array2D[i] = [];
                for (let j = 0; j < cols; j++) {
                    array2D[i][j] = +(prompt(`Nhập phần tử tại vị trí [${i}][${j}]: `));
                }
            }
            break;

        case 2: 
            if (array2D.length === 0) {
                console.log("Mảng rỗng");
            } else {
                console.log("Mảng 2 chiều:");
                for (let i = 0; i < array2D.length; i++) {
                    console.log(array2D[i].join(" "));
                }
            }
            break;
        case 3: 
            let sum = 0;
            for (let i = 0; i < array2D.length; i++) {
                for (let j = 0; j < array2D[i].length; j++) {
                    sum += array2D[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng: " + sum);
            break;

        case 4: 
            let max = array2D[0][0];
            let maxIndex = [0, 0];
            for (let i = 0; i < array2D.length; i++) {
                for (let j = 0; j < array2D[i].length; j++) {
                    if (array2D[i][j] > max) {
                        max = array2D[i][j];
                        maxIndex = [i, j];
                    }
                }
            }
            console.log(`Phần tử lớn nhất là ${max} tại vị trí [${maxIndex[0]}][${maxIndex[1]}]`);
            break;

        case 5:
            let row = prompt("Nhập số hàng bạn muốn tính trung bình: ");
            row = parseInt(row);

            if (row < 0 || row >= array2D.length) {
                console.log("Hàng không hợp lệ!");
            } else {
                let rowSum = 0;
                for (let i = 0; i < array2D[row].length; i++) {
                    rowSum += array2D[row][i];
                }
                let average = rowSum / array2D[row].length;
                console.log(`Trung bình cộng các phần tử của hàng ${row} là: ${average}`);
            }
            break;

        case 6:
            array2D.reverse();
            console.log("Mảng đã được đảo ngược các hàng.");
            break;

        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Chức năng không hợp lệ. Vui lòng chọn lại.");
    }
} while (answer!=7);