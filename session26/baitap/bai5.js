function numbMax() {
    let arr = [];
    let answer = +prompt("mời bạn nhập số lượng : ");
    if (Number.isInteger(answer) && answer > 0) {
        for (let index = 0; index < answer; index++) {
            arr[index] = +prompt(`nhập phần tử thứ ${index+1} : `);
            if (!Number.isInteger(arr[index])) {
                alert("mời bạn nhập lại ....");
                index--;
            }
        }
        let max = arr[0];
        let indexMax ;
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i]>max){
                max = arr[i];
                indexMax = i+1;
            }
        }
        console.log(`Phần tử lớn nhất trong mnagr là : ${max} , nằm ở vị trí ${indexMax}`);
    }else{
        console.log("dữ liệu nhập vào không hợp lệ");
    }
}
numbMax();