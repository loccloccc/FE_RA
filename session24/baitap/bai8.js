let choice;
let str;
do {
  choice = +prompt(`
        1. Nhập chuỗi ký tự
        2. Hiển thị chuỗi ký tự
        3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
        4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
        5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
        6. Chuyển đổi chuỗi ký tự thành dạng snake_case
        7. Thoát chương trình
        Lựa chọn của bạn : `);
  switch (choice) {
    case 1:
      str = prompt("mời bạn nhập chuỗi : ");
      break;
    case 2:
      console.log(`in chuỗi ${str}`);
      break;
    case 3:
      let arr = str.split("");
      let counted = [];
      let count = [];
      for (let i = 0; i < arr.length; i++) {
        let flag = 1;
        if (counted.includes(arr[i])) {
          continue;
        }
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            flag++;
            counted.push(arr[j]);
          }
        }
        counted.push(arr[i]);
        console.log(`Ký tự '${arr[i]}' xuất hiện ${flag} lần`);
      }

      break;
    case 4:
      let arr2 = [];
      arr2 = str.split(" ");
      let longWorld = arr2[0];
      let shortWorld = arr2[0];
      for (let i = 0; i < arr2.length; i++) {
        if (arr2[i].length > longWorld.length) {
          longWorld = arr2[i];
        }
        if (arr2[i].length < shortWorld.length) {
          shortWorld = arr2[i];
        }
      }
      console.log(
        `từ dài nhất là : ${longWorld} , từ ngắn nhất là : ${shortWorld}`
      );
      break;
    case 5:
      let charCount = {};
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
          charCount[char]++;
        } else {
          charCount[char] = 1;
        }
      }
      let maxChar = "";
      let maxCount = 0;

      for (let char in charCount) {
        if (charCount[char] > maxCount) {
          maxCount = charCount[char];
          maxChar = char;
        }
      }
      console.log(
        `Ký tự xuất hiện nhiều nhất là '${maxChar}' với ${maxCount} lần.`
      );

      break;
    case 6:
      let str = "Hello World This Is A Test";
      let wordsArray = str.split(" ");
      let joinedString = wordsArray.join("_");
      let snakeCaseString = joinedString.toLowerCase();

      console.log(snakeCaseString);

      break;
    case 7:
      console.log("thoát chương trình");
      break;
    default:
      console.log("không có sự lựa chọn này");
      break;
  }
} while (choice != 7);
