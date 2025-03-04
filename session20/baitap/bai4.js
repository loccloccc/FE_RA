let str = prompt("mời bạn nhập vào chuỗi :");
let key = prompt("mời bạn nhập kí tự : ");
let check = 0;

for (let i = 0; i < str.length - 1; i++) {
  if (str[i] == key) {
    check++;
    break; 
  }
}
check != 0 ? document.write("Tồn tại từ cần tìm") :  document.write("Không tồn tại từ cần tìm");
