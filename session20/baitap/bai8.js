let numb = Number(prompt("mời bạn nhập số : "));
let flag = 0 ;
if((Number.isInteger(numb) && numb > 1)){
    for(var i = 2 ; i <= numb ; i++){
        if(i == 2 || i == 3 || i == 5){
            document.write(i," ");
        }else if(i %2==0 || i %3==0 || i%5==0){
            continue;
        }else{
            document.write(i," ");
        }
    }
    
}else{
    document.write("giá trị không hợp lệ");
}
