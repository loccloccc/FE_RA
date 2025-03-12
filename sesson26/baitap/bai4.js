function ngTo() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if(arr.length == 0){
        console.log("mảng rỗng");
    }
    if(Array.isArray(arr)){
        let check = arr.filter(checkNgTo);
        console.log(check);
    } else {
        console.log("dữ liệu không hợp lệ");
    }
}

function checkNgTo(num) {
    if(num <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

ngTo();
