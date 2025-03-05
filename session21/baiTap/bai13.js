let answer = prompt("lựa chọn của bạn : ");
let n = 10;
switch (answer) {
  case "b":
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        document.write("* ");
      }
      document.write("<br>");
    }
    break;
  case "a":
    for (let i = n; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        document.write("* ");
      }
      document.write("<br>");
    }
    break;
  case "c":
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j < i * 2; j++) {
        document.write(" ");
      }
      for (let k = 1; k <= n - i + 1; k++) {
        document.write("* ");
      }
      document.write("<br>");
    }

    break;
  case "d":
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < n - i; j++) {
        document.write("&nbsp;&nbsp;");
      }
      for (let j = 0; j < i; j++) {
        document.write("* ");
      }
      document.write("<br>");
    }
    break;

  default:
    break;
}
