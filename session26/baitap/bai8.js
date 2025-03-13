function a() {
  let arr = [];
  let n = +prompt("mời nhập độ dài mảng : ");
  if (Number.isInteger(n) && n > 0) {
    for (let index = 0; index < n; index++) {
      arr[index] = +prompt(`nhập phần tử thứ ${index + 1} là : `);
      if (!Number.isInteger(arr[index])) {
        alert("bannj nhập không ffungs , mời bạn nhập lại...");
        index--;
      }
    }
    let soNgTo = arr.filter(checkNgTo);
    let soNgToLe = soNgTo.filter((i) => {
      return i % 2 != 0;
    });
    console.log(soNgToLe);
  } else if (n == 0) {
    console.log("mảng rỗng");
  } else {
    console.log("lỗi");
  }
}
function checkNgTo(arr) {
  if (arr <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(arr); i++) {
    if (arr % i === 0) {
      return false;
    }
  }
  return true;
}
a();