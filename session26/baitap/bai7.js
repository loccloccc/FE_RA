function evenNumb() {
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
        let square = arr.filter((i) => {
            return Math.pow(i,2)%2==0;
        });
        console.log(square);
    }else if(answer==0){
        console.log("mảng rỗng");
    }else{
        console.log("lỗi");
    }
}
evenNumb();