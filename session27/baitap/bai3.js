let r, a, b, res;
function mainMenu() {
  let choice;
  do {
    choice = +prompt(`Chọn chức năng:
        1. Tính diện tích hình tròn
        2. Tính chu vi hình tròn
        3. Tính diện tích hình chữ nhật
        4. Tính chu vi hình chữ nhật
        5. Thoát`);

    switch (choice) {
      case 1:
        inputCircle();
        acreageCircle(r);
        break;
      case 2:
        inputCircle();
        perimeterCircle(r);

        break;
      case 3:
        inputRectangle();
        acreageRectangle(a, b);

        break;
      case 4:
        inputRectangle();
        perimeterRectangle(a, b);

        break;
      case 5:
        console.log("thoát");

        break;
      default:
        console.log("không có lựa chọn của này");
    }
  } while (choice !== 5);
}
// hình tròn
function inputCircle() {
  r = +prompt("mời bạn nhập bán kính hình tròn : ");
  return r;
}
function acreageCircle(r) {
  console.log("diện tích : ", Math.PI * r * r);
}
function perimeterCircle(r) {
  console.log("chu vi :", 2 * Math.PI * r);
}
//hình chữ nhật

function inputRectangle() {
  a = +prompt("mời bạn nhập chiều dài : ");
  b = +prompt("mời bạn nhập chiều rộng : ");
  return a, b;
}

function acreageRectangle(a, b) {
  console.log("diện tích ", a * b);
}

function perimeterRectangle(a, b) {
  console.log("chu vi :", (a + b) * 2);
}

mainMenu();
