let n = Number(prompt("mời bạn nhập số lượng muốn thêm vào phần tử : "));
let arr = [];
let count = 0;
if (Number.isInteger(n) ) {
  if (n > 0) {
    console.log(`mời bạn nhập ${n} phần tử vào mảng : `);
    for (let i = 0; i < n; i++) {
      arr[i] = prompt(`phần tử thứ ${i + 1} :`);
    }
    console.log(arr);
    for (let i = 0; i < n; i++) {
      if (arr[i] < 0) {
        count++;
      }
    }
    console.log(`số âm xuất hiện ${count} trong mảng`);
  } else if (n == 0) {
    console.log("Mảng không có phần tử");
  } else {
    console.log("số lượng phần tử không hợp lệ");
  }
} else {
  console.log("số lượng không hợp lệ");
}
