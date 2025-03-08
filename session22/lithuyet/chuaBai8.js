// yêu cầu in ra phần tử có số lần xuất hiện nhiều nhất nếu có cùng số lần nhiều nhất trả về phần tử nhỏ nhất
//B1 : duyệt qua các phần tử trong mảng 
//B2 : đếm số lượng xuất hiện của phần tử 
//B3 : tạo maxCount để lưu giá trị lớn nhất
//B4 : tạo biến lứu giá trị nhỏ nhất minElement 



let minElement;
let arr = [4,2,5,7,4,1,8,6,2,5,7];
let maxCount = 0;
for(let i = 0 ; i< arr.length ;i++){
    let count = 0 ;
    for(let j = 0 ; j < arr.length ;j++){
        if(arr[i]==arr[j]){
            count++;
        }
    }
    if(count>maxCount){
        maxCount=count;
        minElement = arr[i];
    }else if(count==maxCount && minElement>arr[i]){
        minElement = arr[i];
    }
}
console.log(minElement);
