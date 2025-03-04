let num=+prompt("nhap 1 so nguyen");
let result="";
if(Number.isInteger(num) && num>0){
    for(i = 5; i<=num; i+=5){
        result+=i;
        if(i!=num){
            result+=", ";
        }
    }
} else{
    console.log("du lieu nhap vao khong hop le");
}
console.log("cac so chia het cho 5 tu 1 den " + num + " la: " + result);

