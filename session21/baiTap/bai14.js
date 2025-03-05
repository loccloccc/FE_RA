let width = parseInt(prompt("Nhập chiều rộng: "));
let height = parseInt(prompt("Nhập chiều cao: "));

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
            document.write("* ");
        } else {
            document.write("&nbsp;&nbsp;&nbsp;"); 
        }
    }
    document.write("<br>"); 
}

