let numb_month = Number(prompt("Mời bạn nhập tháng trong năm : "));
switch (numb_month) {
  case 1:
  case 3: 
  case 5: 
  case 7: 
  case 8:
  case 10: 
  case 12:
    document.write("tháng ",numb_month,"có 31 ngày");
    break;
  case 2:
    document.write("tháng ",numb_month,"có 28 ngày hoặc 29 ngày năm nhuận");
    break;
  case 4: 
  case 6: 
  case 9 :
  case 11 :
    document.write("tháng ", numb_month,"có 30 ngày");
    break;
  default:
    document.write("không có tháng này ....");
}
