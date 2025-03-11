function keyCapital(str) {
    if(String.toString(str)){
        let str2 = str.split(" ");
        for (let i = 0; i < str2.length; i++) {
            if(!str2[i] == " "){
                str2[i]= str2[i][0].toUpperCase()+str2[i].slice(1).toLowerCase();
            }
        }
        console.log(str2.join(" "));
        return str2;
    }
    console.log("không phải là chuỗi");
}
let str = prompt("mời bạn nhập chuỗi ; ");
keyCapital(str);

