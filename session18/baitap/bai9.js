let hour = Math.abs(Number(prompt("mời bạn nhập giờ (0-23):")));
let minu = Math.abs(Number(prompt("mời bạn nhập phút (0-59):")));
let seco = Math.abs(Number(prompt("mời bạn nhập giây (0-59):")));
if((hour >= 0 && hour <= 23) && (minu >=0 && minu <= 59 ) && (seco >=0 && seco <= 59 )){
    let time = (hour >= 12 && hour <= 23 ) ? document.write(Math.abs(hour-12),":",minu,":",seco ,"PM"):document.write(Math.abs(hour-12),":",minu,":",seco,"AM");
}else{
    document.write("không có khoảng thời gian nào như vậy");
}