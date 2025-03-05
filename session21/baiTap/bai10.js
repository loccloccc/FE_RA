let input=+prompt("nhap so nguyen duong");
if(Number.isInteger(input) && input > 0){
    let prime = "";
    let count=0;
    for(i=2; ;i++){
        let check=0;
        for(j=2; j<=i**(1/2); j++){
            if(i%j==0){
                check++;
                break;
            }
        }
        if(check==0){
            count++;
            prime+=i + " ";
        }
        if(count==input){
            break;
        }
    }
    document.write("so nguyen to: " + prime);
} else{
    document.write("nhap so nguyen dương");
}
