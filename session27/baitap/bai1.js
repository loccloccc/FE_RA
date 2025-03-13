let a, b, res , choice;
function main() {
  do {
    choice = +prompt(`
            1.Cộng hai số.
            2.Trừ hai số.
            3.Nhân hai số.
            4.Chia hai số.
            5.Thoát.
            Lựa chọn của bạn : `);
    switch (choice) {
      case 1:
        input();
        res = sum(a, b);
        console.log(res);
        break;
      case 2:
        input();
        res = signal(a, b);
        console.log(res);
        break;
      case 3:
        input();
        res = core(a, b);
        console.log(res);
        break;
      case 4:
        input();
        res = divide(a, b);
        console.log(res);
        break;
      case 5:
        console.log("thoát");
        break;
      default:
        console.log("không có lựa chọn này");
        break;
    }
  } while (choice != 5);
}
function input() {
  a = +prompt("mời bạn nhập số thứ nhất : ");
  b = +prompt("mời bạn nhập số thứ hai : ");
  return a, b;
}
function sum(a, b) {
  return a + b;
}
function signal(a, b) {
  return a - b;
}
function core(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
main();
