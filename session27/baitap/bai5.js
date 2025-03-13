let arr = [];
let n = +prompt("mời bạn nhập độ dài chuỗi : ");
let arr2 = [];
let n2 ;
if(!Number.isInteger(n) && n < 0){
    console.log("lỗi");
}else{
    for (let i = 0; i < n; i++) {
       arr[i] = +prompt(`mời bạn nhập phần tử thứ ${i+1} của mảng : `);
       if(!Number.isInteger(arr[i])){
        alert("lỗi , miwf bạn nhập lại : ");
        i--;
       }
    }
    n2 = +prompt("mời bạn nhập : ");
    if(!Number.isInteger(n2) && n2 < 0){
        console.log("lỗi");
    }else{
        console.log(arr);
        arr[1,2,3,4,5,6,7,8,9]
        for(let i = 0 ; i < arr.length ; i += n2){
            arr2.push(arr.slice(i,i+n2));
        }
    }
    console.log(arr2);
}

