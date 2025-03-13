let arr = [];
let n = +prompt("mời bạn nhập độ dài chuỗi : ");
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
    let check=0;
    let gap=arr[1]-arr[0];
    arr.sort();
    for(i=0; i<arr.length-1; i++){
        if(arr[i]+gap!=arr[i+1]){
            check++;
            break;
        }
    }
    if(check==0){
        console.log("true");
    } else{
        console.log("flase");
    }   
}

