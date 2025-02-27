let money = Number(prompt("mời bạn nhập tiền :"));
let month = Number(prompt("mời bạn số tháng :"));
let interest = money * (4.3/100)/12 * month ;
let interest2 =  interest.toLocaleString(); 
document.write("số tiền lãi sau khi gửi ngân hàng là : " , interest2 , "VND");
