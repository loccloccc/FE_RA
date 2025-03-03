let numb1 = Number(prompt("mời bạn nhập số thứ nhất :"));
let numb2 = Number(prompt("mời bạn nhập số thứ hai :"));
let numb3 = Number(prompt("mời bạn nhập số thứ ba :"));
let check = (numb1 > numb2) ? ((numb1 > numb3) ? document.write("số lớn nhất là " , numb1) : document.write("số lớn nhất là " , numb3)) :((numb2 > numb3) ? document.write("số lớn nhất là " , numb2) : document.write("số lớn nhất là " , numb3)) ;
