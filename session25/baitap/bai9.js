function checkEmain(str) {
  let users = ["doanngocduy@gmail.com", "hoangminhchien@gmail.com"];
  let check1 = 0;
  let check2 = 0;
  let check3 = 0;
  if (str.includes("@")) {
    check1++;
  }
  if (str.endsWidth(".com") || a.endsWidth(".vn")) {
    check2++;
  }
  if (check1 != 0 && check2 != 0) {
    for (let i = 0; i < users.length; i++) {
      if (str === users[i]) {
        check3++;
      }
    }
    if (check3 !== 0) {
      console.log("tài khoản đã tồn tại");
    } else {
      console.log("đăng kí thành công!!!!");
      users.push(str);
      console.log(users);
    }
  } else {
    console.log("bạn nhập không đúng định dạng email");
  }
}

let email = prompt("mời bạn nhập email : ");
checkEmain(email);
