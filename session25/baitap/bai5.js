function checkIntEven(arr) {
    if(Array.isArray(arr)){
        if(arr.length==0){
            return "Mảng không chứa phần tử";
        }
        let check = 0 ;
        for(let i = 0 ; i < arr.length ; i++){
            if(Number.isInteger(arr[i])){
                if (arr[i] > 0) {
                    check++;
                }
            }
        }
        (check!=0) ? console.log(check) : console.log("không có số nguyên dương trong mảng");
        
        return check;
    }
    console.log("chuỗi nhập vào không hợp lệ");
}

checkIntEven([1.2,-3,-6]);