function sum(numb1,numb2) {
    if(Number.isInteger(numb1) && Number.isInteger(numb2)){
        console.log("tổng của 2 số là : " , numb1+numb2);
        return numb1 + numb2;
    }
    console.log("giá trị nhập vào không hợp lệ.");
}

sum(4.5,3);