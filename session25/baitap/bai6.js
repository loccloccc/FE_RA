function isPalindrome(str) {
    if(String.toString(str)){
        // let arr = str.split(" ");
        let check = 0;
        for(i=0; i<=(str.length)/2; i++){
            if(str[i] != str[str.length-1-i]){
                check++;
                break;
            }
        }
        (check!=0) ? console.log("không phải chuỗi đối xứng") : console.log("là chuỗi đối xứng");
        return check;
    }
    
    console.log("chuỗi nhập vào không hợp lệ");
}
let str = prompt("mời bạn nhập chuỗi : ");
isPalindrome(str);