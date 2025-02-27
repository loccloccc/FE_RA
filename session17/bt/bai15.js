let r = +prompt("nhập bán kienhs hình cầu");
const PI = 3.14;
let V = 4/3*PI*r*r*r;
let S = 4*PI*r*r;
let C = 2*PI*r;
document.write("thể tích hình cầu:",V.toFixed(2),"<br>");
document.write("thể tích diện tích:",S.toFixed(2),"<br>");
document.write("thể tích chu vi:",C.toFixed(2),"<br>");