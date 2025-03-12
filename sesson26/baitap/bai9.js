function a() {
  let arr = [];
  let length = +prompt("Mời bạn nhập độ dài mảng: ");

  if (Number.isInteger(length) && length > 0) {
    for (let i = 0; i < length; i++) {
      arr[i] = +prompt(`Mời bạn nhập phần tử thứ ${i + 1}: `);

      if (isNaN(arr[i])) {
        alert("Lỗi, mời bạn nhập lại...");
        i--;
      }
    }
    res(arr);

    console.log(arr);
  } else {
    console.log("Lỗi");
  }
}
function res(arr) {
  let even = 0,
    odd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even += arr[i];
    } else {
      odd += arr[i];
    }
  }

  console.log(`Tổng chẵn: ${even}, tổng lẻ là ${odd}`);
}
a();
