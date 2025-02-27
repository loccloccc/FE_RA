let numb = Number(prompt("mời bạn nhập số "))
document.write(Math.abs(numb));
// -Math.abs : là toán giá trị tuyệt đối .
// + nếu nhập 5.5 vào thì giá trị vẫn sẽ là 5.5 , nếu nhập -10 thì giá trị sẽ là số dương 10  
document.write(Math.ceil(numb));
// Math.celi : là hàm làm tròn lên 
// nếu nhập 4.4 sẽ làm tròn lên 5 , nhập 5.8 sẽ làm tròn lên 6 

document.write(Math.floor(numb));
// Math.celi : là hàm làm tròn xuống 
// nếu nhập 5.7 sẽ làm tròn lên 5 , nhập 6.1 sẽ làm tròn lên 6
document.write(Math.round(numb));
// Math.celi : là hàm làm tròn đến giá trị gần nhất 
// nếu nhập 10.1 sẽ làm tròn xuống 10 , nhập 20.6 sẽ làm tròn lên 21