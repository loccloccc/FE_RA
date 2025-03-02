let year = Math.abs(+prompt("mời bạn nhập năm "));
let check = (((year%4==0) && (year % 100 !=0)) || (year%400==0)) ? document.write("năm nhuận") : document.write("năm không nhuận"); 