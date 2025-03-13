let arr = [];
let a, nameStudent, choice;
function main() {
  do {
    choice = +prompt(`
        1.Nhập danh sách sinh viên.
        2.Hiển thị danh sách sinh viên.
        3.Tìm sinh viên theo tên.
        4.Xóa sinh viên.
        5.Thoát
        Lựa chọn của bạn : `);
    switch (choice) {
      case 1:
        inputStudent(arr, a);
        break;
      case 2:
        printStudent(arr, a);
        break;
      case 3:
        searchStudent(arr, a);
        break;
      case 4:
        deleteStudent(arr, a);
        break;
      case 5:
        console.log("thoát chương trình");
        break;
      default:
        console.log("không có sự lựa chọn này");
        break;
    }
  } while (choice != 5);
}

function inputStudent() {
  a = +prompt("mời bạn nhập số lượng danh sách sinh viên: ");
  if (Number.isInteger(a) && a > 0) {
    for (let i = 0; i < a; i++) {
      arr[i] = prompt("mời bạn nhập tên sinh viên :");
      if (!String.toString(arr[i])) {
        console.log("bạn nhập không đúng định dạng , mời bạn nhập lại");
        i--;
      }
    }
    return arr, a;
  } else {
    console.log("bạn nhập không đúng");
  }
}
function printStudent(arr) {
  console.log(arr);
}
function searchStudent(arr) {
  nameStudent = prompt("mời bạn nhập tên sinh viên muốn tìm : ");
  let check = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === nameStudent) {
      check++;
      break;
    }
  }
  check != 0
    ? console.log(`sinh viên ${nameStudent} có trong danh sách`)
    : console.log(`sinh viên ${nameStudent} không có trong danh sách`);
}
function deleteStudent(arr) {
  nameStudent = prompt("mời bạn nhập tên sinh viên muốn xóa : ");
  let check = 0;
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === nameStudent) {
      check++;
      index = i;
      break;
    }
  }
  arr.splice(index, 1);
  check != 0
    ? console.log(`sinh viên ${nameStudent} đã xóa ${arr}`)
    : console.log(`sinh viên ${nameStudent} không có trong danh sách`);
}

main();
