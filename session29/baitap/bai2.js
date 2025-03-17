arr = [];
let choice , length;
//
let idProduct , nameProduct , priceProduct , categoryProduct , quantityProduct; 


function main() {
    do {
        choice = +prompt(`
            1.Thêm sản phẩm vào danh sách sản phẩm.
            2.Hiển thị tất cả sản phẩm.
            3.Hiển thị chi tiết sản phẩm theo id.
            4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
            5.Xóa sản phẩm theo id.
            6.Lọc sản phẩm theo khoảng giá.
            7.Thoát.
            Lựa chọn cuẩ bạn : `);
            
        switch (choice) {
            case 1:
                inputProduct();
                //nhập
                break;
            case 2 :
                printProduct(arr);
                //hiển thị
                break;
            case 3 :
                printID(arr);
                // hiển thị theo id 
                break;
            case 4 : 
                // cập nhật thông tin theo id (name , price , category , quantity)
                updateOfId(arr);
                break;
            case 5 :
                deleteID(arr);
                //xóa theo id
                break;
            case 6:
                filterByPrice(arr);
                //lọc sản phẩm theo giá
                break;
            case 7 : 
                console.log("thoát");
            default:
                console.log('không có lựa chọn này');
                break;
        }
    } while (choice!=7);
}
//idProduct , nameProduct , priceProduct , categoryProduct , quantityProduct; 
function inputProduct() {
    length = +prompt("nhập số lượng phần tử trong hệ thông : ");
    for(let i = 0 ; i < length ; i++){
        idProduct = Math.floor(Math.random() * 5575676 + new Date().getMilliseconds())
        nameProduct = prompt("mời bạn nhập tên sản phẩm : ");
        priceProduct = +prompt("mời bạn nhập giá sản phẩm : ");
        categoryProduct = prompt("mời bạn nhập danh mục sản phẩm : ");
        quantityProduct = +prompt("mời bạn số lượng : ");
        let product = {
            id : idProduct,
            name : nameProduct,
            price : priceProduct,
            category : categoryProduct,
            quantity : quantityProduct,
        };
        arr.push(product);
    }
}

function printProduct(arr) {
    if (arr.length==0) {
        console.log("mảng rỗng");
    }else{
        console.log(arr);
    }
}


function printID(arr) {
    let printId = +prompt("mời bạn nhập id muốn xem : ");
    let displayID = arr.filter(i => i.id.include(printID));
    if(displayID==0){
        console.log(`không có id này trong mảng ${printID} `);
    }else{
        console.log(displayID);
    }
}

function updateOfId(arr) {
    let idUpdate = +prompt("mời bạn nhập id muốn cập nhật : ");
    let check = arr.filter(i => i.id.include(idUpdate));
    if(check==0){
        console.log(`không có id này trong mảng ${idUpdate} `);
    }else{
        let name = prompt("mời nhập tên sản phẩm : ");
        let price = +prompt("mời nhập giá sản phẩm :");
        let category = prompt("mời nhập danh mục : ");
        let quantity = +prompt("mời nhập số lượng sản phẩm");
        arr[check] = {
            id : idUpdate,
            name : name,
            price : price,
            category : category,
            quantity : quantity,
        };
        console.log("cập nhật thành công");
    }
}

function deleteID(arr){
    let printId = +prompt("mời bạn nhập id muốn xóa : ");
    let displayID = arr.filter(i => i.id.include(printID));
    if(displayID==0){
        console.log(`không có id này trong mảng ${printID} `);
    }else{
        arr.splice(displayID,1);
        console.log("xóa thành công");
    }
}

function filterByPrice(arr) {
    let minPrice = +prompt("Nhập giá tối thiểu: ");
    let maxPrice = +prompt("Nhập giá tối đa: ");
    let filteredProducts = arr.filter(i => i.price >= minPrice && i.price <= maxPrice);

    if (filteredProducts.length === 0) {
        console.log(`Không có sản phẩm trong khoảng giá từ ${minPrice} đến ${maxPrice}`);
    } else {
        console.log("Sản phẩm trong khoảng giá:", filteredProducts);
    }
}
main();