let numb = Number(prompt("mời bạn nhập số : "));
let flag = 0 ;
if((Number.isInteger(numb) && numb > 1)){
    for(let i = 2 ; i < numb ; i++){
        if(numb%i==0){
            flag++;
        }
    }
    flag != 0 ? document.write("không là số nguyên tố ") :  document.write("là số nguyên tố "); 
}else{
    document.write("giá trị không hợp lệ");
}
