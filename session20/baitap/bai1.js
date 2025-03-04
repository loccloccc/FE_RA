let numb = Number(prompt("mời bạn nhập số :"));
let sum = 0 ;
if(numb > 0 && Number.isInteger(numb) ){
    for( let i = 1 ; i <= numb; i++){
        sum += i ;
    }
    document.write("tổng là : " , sum);
}else{
    document.write("không hợp lệ");
}