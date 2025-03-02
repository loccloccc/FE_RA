let math = Number(prompt("mời bạn nhập điểm toán : "));
let literature = Number(prompt("mời bạn nhập điểm văn : "));
let english = Number(prompt("mời bạn nhập điểm anh : "));
let average = ((math + literature + english) / 3);
document.write(average.toFixed(1),"<br>");
if (average >= 8.0) {
  document.write("giỏi");
} else if (6.5 <= average  && average < 8.0) {
  document.write("khá");
} else if (5.0 <= average && average< 6.4) {
  document.write("trung bình");
} else {
  document.write("yếu");
}
