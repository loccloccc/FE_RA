let choice , length ;
let listFoot = [];
let name , price , note;

function main() {
    do {
        choice = +prompt(`
            1.Thêm món ăn vào danh mục.
            2.Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
            3.Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
            4.Xóa món ăn theo tên khỏi danh mục.
            5.Tìm kiếm món ăn theo tên trong toàn bộ menu.
            6.Thoát
            Lựa chọn của bạn : `);
    
        switch (choice) {
            case 1:
                add(listFoot);
                break;
            case 2:
                print(listFoot);
                break;
            case 3:
                update(listFoot);
                break;
            case 4:
                deleteFoot(listFoot);
                break;
            case 5:
                search(listFoot);
                break;
            case 6:
                console.log("thoát");
                break;
            default:
                console.log("không có lựa chọn nào");
                break;
        }
    } while (choice!=6);
}

function add(a) {
    length = +prompt("mời bạn nhập số lượng món ăn muốn thêm ");
    for(let i = 0 ; i < length ; i++){
        name = prompt("mời bạn nhập tên món ăn : ");
        price = prompt("mời bạn nhập giá : ");
        note = prompt("mời bạn nhập mô tả món ăn");
        let menu = {
            name : name,
            price : price,
            note : note
        }
        listFoot.push(menu);
    }
}

function print(a) {
    if(a.length === 0){
        console.log("mảng rỗng");
    }else{
        console.log(a);
    }
}

function update(a){
    let name = prompt("mời bạn nhập tên món ăn muốn cập nhật : ");
    let check = a.findIndex(i => i.name == name );
    if(check == -1){
        console.log("không có trong mảng");
    }else{
        let nameUpdate = prompt("mời nhập tên mới : ");
        let priceUpdate = prompt("mời bạn nhập giá mới : ");
        let noteUpdate = prompt("mời bạn nhập mô tả mới : ");
        a[check] = {
            name : nameUpdate,
            price : priceUpdate,
            note : noteUpdate,
        }
        console.log("cập nhật thành công");
    }
}

function deleteFoot(a) {
    let nameDele = prompt("mời bạn nhập tên món ăn muốn xóa : ");
    let check = a.findIndex(i => i.name == nameDele );
    if(check == -1){
        console.log("không có trong menu");
    }else{
        a.splice(check,1);
        console.log("xóa thành công");
    }
}

function search(a) {
    let nameDele = prompt("mời bạn nhập tên món ăn muốn tìm : ");
    let check = a.findIndex(i => i.name == nameDele );
    if(check == -1){
        console.log("không có trong menu");
    }else{
        console.log(a[check]);
        console.log("in");
    }
}

main();