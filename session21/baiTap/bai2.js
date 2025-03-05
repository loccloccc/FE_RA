let numb , sum_odd  = 0 , sum_even = 0 ;
for(let i = 1 ; i <= 5 ; i++){
    numb = Number(prompt("mời bạn nhập số :" ));
    if(Number.isInteger(numb)){
        if(numb % 2 != 0 ){
            sum_odd++;
        }else{
            sum_even++;
        }
    }else{
        alert("bạn nhập không đúng định dạng");
    }
} 
document.write("tổng các số lẻ là : " , sum_odd , " , tổng các số chẵn là : " , sum_even);