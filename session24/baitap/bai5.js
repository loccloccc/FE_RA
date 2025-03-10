let array2D = []; // Khởi tạo mảng 2 chiều

let choice;
do {
    // Hiển thị menu thông qua prompt
    let choice = +prompt(`
    Chọn chức năng:
    1. Nhập mảng 2 chiều
    2. Hiển thị mảng 2 chiều
    3. Tính tổng các phần tử trong mảng
    4. Tính tổng đường chéo chính
    5. Tính tổng đường chéo phụ
    6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột)
    7. Thoát chương trình
    Lựa chọn của bạn :
    `);
    switch (choice) {
        case 1:
            let row = prompt("Nhập số lượng hàng: ");
            let col = prompt("Nhập số lượng cột: ");
            array2D = [];
            for (let i = 0; i < row; i++) {
                array2D[i] = [];
                for (let j = 0; j < col; j++) {
                    array2D[i][j] = Number(prompt(`Nhập phần tử tại vị trí [${i}][${j}]: `));
                }
            }
            break;

        case 2: 
            if (array2D.length === 0) {
                console.log("Mảng 2 chiều chưa được nhập!");
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
            let mainDiagonalSum = 0;
            for (let i = 0; i < array2D.length; i++) {
                mainDiagonalSum += array2D[i][i]; 
            }
            console.log("Tổng đường chéo chính: " + mainDiagonalSum);
            break;

        case 5:
            let secondaryDiagonalSum = 0;
            let  n = array2D.length;
            for (let i = 0; i < n; i++) {
                secondaryDiagonalSum += array2D[i][n - 1 - i]; 
            }
            console.log("Tổng đường chéo phụ: " + secondaryDiagonalSum);
            break;

        case 6: 
            let rowOrCol = prompt("Bạn muốn tính trung bình cộng của hàng (0) hay cột (1)?");
            if (rowOrCol === '0') {
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
            } else if (rowOrCol === '1') {
                let col = prompt("Nhập số cột bạn muốn tính trung bình: ");
                col = parseInt(col);

                if (col < 0 || col >= array2D[0].length) {
                    console.log("Cột không hợp lệ!");
                } else {
                    let colSum = 0;
                    for (let i = 0; i < array2D.length; i++) {
                        colSum += array2D[i][col];
                    }
                    let average = colSum / array2D.length;
                    console.log(`Trung bình cộng các phần tử của cột ${col} là: ${average}`);
                }
            } else {
                console.log("Lựa chọn không hợp lệ! Vui lòng chọn 'h' hoặc 'c'.");
            }
            break;

        case 7: 
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Chức năng không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 7);
