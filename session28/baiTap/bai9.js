//ứng dụng quản lí sách trong thư viện
let choice ; // câu trả lời
let quanlity , i; // số lượng
let arr = [];

let id , nameBook , nameAuthor /* tên tác giả */, yearComposition /* năm sáng tác */,
priceBook /* giá sách */ , statusbar /* trạng thái */; 

//
function libraryManagement() {
    do {
        choice = +prompt(`
            1.Thêm sách mới.
            2.Hiển thị danh sách sách.
            3.Tìm kiếm sách theo tiêu đề.
            4.Cập nhật trạng thái mượn/trả sách theo id sách.
            5.Xóa sách theo id sách ra khỏi danh sách.
            6.Sắp xếp sách theo giá tăng dần.
            7.Thoát.
            Lựa chọn của bạn : `);
        switch (choice) {
            case 1:
                //nhập sáchsách
                inputLibrary();
                break;
            case 2 :
                printLibrary();
                //hiển thị
                break;
            case 3 :
                searchBook();
                //tìm kiếm theo tên
                break;
            case 4 :
                update();
                //cập nhật trạng thái
                break;
            case 5 :
                deleteId();
                //xóa theo id
                break;
            case 6 :
                sort();
                //sắp xếp theo giá , tăng dần
                break;
            case 7 :
                console.log("thoát");
                break;    
            default:
                console.log("không có lựa chọn này");
                break;
        }
    } while (choice != 7);    
}

//hàm nhập 
function inputLibrary() {
    quanlity = +prompt("mời bạn nhập số sách muốn thêm : ");
    for(i = 0 ; i < quanlity ; i++){
        id = +prompt("mời bạn nhập id ");
        nameBook = prompt("mời bạn nhập tên sách : ");
        nameAuthor = prompt("mời bạn nhập tên tác giả : ");
        yearComposition = +prompt("mời bạn nhập năm sáng tác : ");
        priceBook = +prompt("mời bạn nhập giá sách : ");
        statusbar = prompt("mời bạn cập nhật trạng thái của sách (cho mượng / vẫn còn ) : ");
        //thêm vào mảng
        let library = {
            id : id,//id
            title : nameBook,//tên sách
            author : nameAuthor,//tác giả
            year : yearComposition,//năm sáng tác
            price : priceBook,//giá
            isAvailable : statusbar,//trạng thái mượn/trả
        };
        arr.push(library);
    }
}
//hàm in
function printLibrary() {
    for(i = 0 ; i < arr.length ; i++){
        console.log(arr[i]);
    }
}

//tìm kiếm theo tên 
function searchBook() {
    let nameSearch = prompt("mời bạn nhập tên sách muốn tìm ");
    let check = arr.filter((nameBook) => nameBook.title.includes(nameSearch));
    if(check.length > 0){
        console.log("sách được tìm thấy : " , check);
    }else{
        console.log(`kkhoong tìm thấy sách ${check} trong thư viện`);
    }
}

//cập nhật trạng thái mượn trả 
function update() {
    let nameBook = prompt("mời bạn nhập sách muốn cập nhật : ");
    let index = arr.findIndex(book => book.title.includes(nameBook));
    if(index != -1){
        let update = prompt("mời bạn nhập trạng thái cho sách : ");
        arr[index].isAvailable = update;
        console.log("cập nhật trạng thái thành công");
    }else{
        console.log(`kkhoong tìm thấy sách ${check} trong thư viện`);
    }
}
//xóa theo id
function deleteId() {
    let id = +prompt("nhập id nhân viên muốn xóa");
    let findIndex = arr.findIndex((item) => item.id == id);
    if (findIndex != -1) {
        let confitmDelete = confirm("bạn có muốn xóa hay không?");
        if (confitmDelete) {
            arr.splice(findIndex, 1);
            console.log("xóa nhân viên thành công!");
        }
    } else {
    console.log("không tìm thấy nhân viên có id là: ", id);
  }
}
function sort() {
    if (arr.length === 0) {
        console.log("Thư viện hiện không có sách để sắp xếp.");
        return;
    }

    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j].price > arr[j + 1].price) {
                // Hoán đổi vị trí
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log("Danh sách sách sau khi sắp xếp theo giá tăng dần:");
    printLibrary();
}
libraryManagement();