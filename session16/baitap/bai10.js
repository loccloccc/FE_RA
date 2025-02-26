let numb1 = Number(prompt("mời bạn nhập số thứ nhất :"));
let numb2 = Number(prompt("mời bạn nhập số thứ hai :"));
let numb3 = Math.floor(Math.random() * (Math.max(numb1,numb2) - Math.min(numb1,numb2)) ) + Math.min(numb1,numb2) ;
document.write(numb3);