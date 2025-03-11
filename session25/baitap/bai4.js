function checkElement(numb){
    let check = 0;
    if(Number.isInteger(numb)){
        if (numb==1) {
            console.log("không là số nguyên tố");
            return;
        }
        for(let i = 2 ; i < numb; i++){
            if (numb%i==0) {
                check++;
            }
        }
        (check!=0) ? console.log("không phải số nguyên") : console.log("là số nguyên");
        return check;
    }
    console.log("dữ liệu nhập vào không hợp lệ");
}
checkElement(1);