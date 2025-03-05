let numb = Number(prompt("mời bạn nhập số nguyên :"));
let result="";
if(Number.isInteger(numb) && numb > 0){
    document.write("ước số của " , numb , " là : " );
    for(let i = 1 ; i <= numb ; i++){
        if(numb%i==0){
           result+=i+"; " + " -" + i + "; ";
        }
    }
}else{
    document.write("bạn nhập không đúng định dạng");
}
document.write(result.slice(0,result.length-1));