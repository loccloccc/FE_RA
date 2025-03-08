let arr = [];
let n = Number(prompt("mời bạn nhập số lượng phần tử : "));
let sum = 0;
let number;
if (Number.isInteger(n)) {
  if (n > 0) {
    console.log(`mời bạn nhập ${n} phần tử vào mảng : `);
    for (let i = 0; i < n; i++) {
      arr[i] = prompt(`phần tử thứ ${i + 1} :`);
    }
    console.log(arr);
    for (let i = 0; i < n; i++) {
      if (Number(arr[i])) {
        number = Number(arr[i]);
        sum += number;
      }
    }
    console.log(`tổng của các kí tự số là ${sum}`);
  } else if (n == 0) {
    console.log("không có kí tự số");
  }
} else {
  console.log("số lượng nhập vào không hợp lệ");
}
