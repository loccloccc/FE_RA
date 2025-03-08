let arr = [];
let n = Number(prompt("mời bạn nhập số lượng phần tử :"));
if(Number.isInteger(n)){
    if(n>0){
        console.log(`mời bạn nhập ${n} phần tử vào mảng`);
        for (let i = 0; i < n; i++) {
            arr[i] = prompt(`mời bạn nhập phần tử thứ ${i+1} : `);
        }
        console.log(arr);
        for(let i = 0 ; i < n ; i++){
            for(let j = i+1 ; j < n ; j++){
                if(arr[i]<arr[j]){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        console.log(arr);
        console.log("phần tử lớn thứ 2 trong mảng là : " , arr[1]);
        
    }
    else if(n==0){console.log("mảng rỗng");}
    else{console.log("số lượng phần tử không được nhỏ hơn 0");
    }
}else{
    console.log("số lượng nhập không đúng định lượng ");
    
}