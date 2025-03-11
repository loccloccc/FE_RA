function checkEven(arr) {
    if(Array.isArray(arr)){
        if(arr.length==0){
            console.log("mảng rỗng");
        }
        let check = 0 ;
        let value = [];
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]%2==0){
                check++;
                value.push(arr[i]);
            }
        }
        (check!=0) ? console.log("các số chẵn trong mảng là :" ,value) : console.log("mảng không có số chẵn");
        return value;
    }
    console.log("giá trị không hợp lệ");
}



checkEven([11,4,65,6]);