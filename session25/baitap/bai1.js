function findMin(arr) {
    //kiểm tra xem có là mảng không
    if (Array.isArray(arr)) {
        if(arr.length==0){
            return "Mảng không chứa phần tử";
        }
        let minItem = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]<minItem){
                minItem = arr[i];
            }
        }
        console.log("giá trị nhỏ nhất trong mảng là : " , minItem);
        return minItem;
    }
    console.log("giá trị không hợp lệ");
}
findMin([43,54,11,2,5,6,7,1])
