let answer = Number(prompt("Bấm [1] để đổi tiền sang USD , bấm [0] để đổi tiền sang VND "));
switch (answer) {
    case 0:
        let moneyUSD = Number(prompt("mời bạn nhập sso tiền : "));
        let vnd = moneyUSD * 23000 ;
        alert("tiền của bạn là : " + vnd.toLocaleString() + "VND")
        break;
    case 1 :
        let moneyVND = Number(prompt("mời bạn nhập sso tiền : "));
        let usd = moneyVND / 23000;
        alert("tiền của bạn là : " + usd.toLocaleString() + "USD")
        break;
    default:
        alert("không có lựa chọn này , mời bạn nhập lại");
        break;
}