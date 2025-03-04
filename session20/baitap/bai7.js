let n = Number(prompt("mời bạn nhập số : "));
let f1 = 1, f2 = 1;
if (n > 0 && Number.isInteger(n)) {
  document.write(f1, " ", f2);
  for (let i = 2; i <= n; i++) {
    let fn = f1 + f2;
    f1 = f2;
    f2 = fn;
    document.write(" ", fn);
  }
}else{
    document.write("giá trị nhập vào không hợp lệ");
}
