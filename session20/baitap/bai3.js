let numb = prompt("mời bạn nhập số nguyên : ");
let check = 0 ;
if (Number.isInteger(numb) == false) {
    for(let i = 0 ; i < numb.length/2 ; i++){
        if(numb[i] != numb[numb.length-1-i]){
            check++;
            document.write("không phải số đối xứng");
            break;
        }
    }
    check == 0 ? document.write("là số đối xứng") : document.write() ;
} else {
    document.write("số không hợp lệ");
}