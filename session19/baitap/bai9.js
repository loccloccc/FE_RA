let result1 = 'javascript' + 5; // kết quả sẽ là javascript5 , tại vì lúc này máy sẽ tự động hiểu 5 là kí tự nên nó sẽ tự động gộp vào thành 1 chuỗi
let result2 = 'javascript' - 1; // kết quả sẽ báo lỗi tại vì đối với dấu "-" thì máy sẽ không hiểu được và nó sẽ báo lỗi
let result3 = '3' + 2;//kq là 32  tại vì lúc này máy sẽ tự động hiểu 2 là kí tự nên nó sẽ tự động gộp vào thành 1 chuỗi
let result4 = '5' - 4;//kq là 1  lúc này JavaScript sẽ chuyển đổi chuỗi "5" thành số 5 và thực hiện phép trừ, cho ra kết quả 1
let result5 =  isNaN( '123');//Kết quả:NAN hàm  isNaN() kiểm tra xem giá trị đầu vào có phải là một số hợp lệ hay không. Ở đây, "123" là một chuỗi có thể chuyển đổi thành số, nên kết quả là NAN.
let result6 = isNaN('hello');//Kết quả: true hàm Chuỗi "hello" không phải là một số hợp lệ và không thể chuyển đổi thành số, nên hàm isNaN() trả về true
let result7 = Number.isNaN("123");//Kết quả:NAN  Hàm Number.isNaN() kiểm tra xem giá trị đầu vào có thực sự là NaN hay không mà không chuyển đổi giá trị đầu vào thành số. Chuỗi "123" không phải là NaN, nên kết quả là NAN.
let result8= Number.isNaN(NaN);//Kết quả: true Hàm Number.isNaN() xác nhận rằng giá trị NaN là NaN, nên kết quả là true.