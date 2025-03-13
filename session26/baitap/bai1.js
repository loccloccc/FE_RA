function filter10(){
  let arr = [];
  let lengthArr = +prompt("mời bạn nhập số lượng phần tử trong mảng : ");
  if (Number.isInteger(lengthArr)) {
  if (lengthArr <= 0) {
      console.log("mảng rỗng");
  } else if (lengthArr > 0) {
      console.log("mời bạn nhập các phần tử : ");
      for (let i = 0; i < lengthArr; i++) {
      arr[i] = +prompt(`giá trị thứ ${i + 1} là : `);
      //ktra xem trang mảng đấy có pgair số k
      if (Number.isNaN(arr[i])) {
          alert("bạn không nhập đúng định dạng , mời bạn nhập lại");
          i--;
      }
      }
      let newArr = arr.filter((a) => {
      return a >= 10;
      });
      console.log("các số lớn hơn bằng 10 trong mảng : " , newArr);
  }
  } else {
  console.log("giá trị bạn nhập vào không hợp lệ!!!");
  }
}
filter10();