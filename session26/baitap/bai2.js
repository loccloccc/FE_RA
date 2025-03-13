function a() {
    let arr = [];
    let lengthArr = +prompt("mời bạn nhập vào độ dài của mảng : ");
    if(Number.isInteger(lengthArr)){
        if (lengthArr <= 0) {
            console.log("mảng rỗng!!!");
        }else{
            console.log("mời bạn nhập các phần tử vào mảng :");
            for (let index = 0; index < lengthArr; index++) {
                arr[index] = prompt(`nhập thứ ${index+1} : `);
            }
            let checkKey = arr.filter((i) => {
                return i.length > 5 ;
            })
            console.log(checkKey);
        }
    }else{
        console.log("không hợp lệ");
    }
}
a();