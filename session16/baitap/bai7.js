let math = +prompt("mời bạn nhập điểm toán : ");
let physics = +prompt("mời bạn nhập điểm lí : ");
let chemistry = +prompt("mời bạn nhập điểm hóa : ");
let total = (math + physics + chemistry)/3;
let arver = total.toFixed(2);
document.write("Điểm trung bình 3 môn toán lí hóa là : " , arver);