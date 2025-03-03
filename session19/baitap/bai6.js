let a = Number(prompt("mời bạn nhập số thứ nhất :"));
let b = Number(prompt("mời bạn nhập số thứ hai :"));
let c = Number(prompt("mời bạn nhập số thứ ba :"));
alert("phương trình có dạng : " + a + "x^2+ "+b+"x "+ c + " = 0");
let delta = b*b - 4*a*c;
if(delta > 0 ){
    let x1 = (-b+Math.sqrt(delta))/(2*a);
    let x2 = (-b-Math.sqrt(delta))/(2*a);
    alert("phương trình có 2 nghiệm là x1= " + x1 + " và x2= " + x2 );
}else if (delta == 0) {
    let x = -b / (2*a);
    alert("phương trình có nghiệm kép là : " + x);
}else{
    alert("phương trình vô nghiệm")
}