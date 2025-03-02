let num = Math.abs(Number(prompt("Mời bạn nhập số năm làm :")));
if (num < 1) {
    document.write("Mới vào nghề");
}else if (num >1 && num < 3) {
    document.write("Nhân viên có kinh nghiệm");
}else if (num > 4 && num < 6) {
    document.write("Chuyên viên");
}else{
    document.write("Quản lí");
}
