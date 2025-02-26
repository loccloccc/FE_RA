let math = +prompt("mời bạn nhập điểm toán : ");
let physics = +prompt("mời bạn nhập điểm lí : ");
let chemistry = +prompt("mời bạn nhập điểm hóa : ");
// ép từ string sang number :
// let a = Number(prompt(""));
let total = (math + physics + chemistry)/3;
let total_a = total.toFixed(2);
console.log("Điêm tbc :"+total_a);
