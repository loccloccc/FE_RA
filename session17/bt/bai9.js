let numb1 = Number(prompt("mời bạn nhập số thứ nhất : "));
let numb2 = Number(prompt("mời bạn nhập số thứ hai : "));
let numb3 = Number(prompt("mời bạn nhập số thứ ba : "));
let delta = (numb2*numb2) - (4*numb1*numb3);
let x = (-numb2)/(2*numb1);
let x1 = (-numb2 + Math.sqrt(delta))/(2*numb1);
let x2 = (-numb2 - Math.sqrt(delta))/(2*numb1);
if (delta>0){
    document.write("phương trình có 2 nghiệm phân biệt : x1=", x1 , "x2=",x2);
}else if(delta===0){
    document.write("phương trình có nghiệm kép :", x );
}else{
    document.write("phương trình vô nghiệm");
}
