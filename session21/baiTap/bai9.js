let numb = Number(prompt("mời banh nhập số nguyên : "));
let check = 0 ;
if(Number.isInteger(numb) && numb > 0){
    for(let i = 2 ; i < numb ; i++){
        if(numb%i==0){
            check++;
        }
    }
}else{
    document.write("không đúng định dạng");
}
let res = (check!=0) ? document.write("không phải là số nguyên ") : document.write(" là số nguyên ") ; 