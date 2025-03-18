let product = [
    { id:1 , name:"mèn mén", price: 20000 , quantity:20 , category:"món ăn dân tộc Mông"},
    { id:2 , name:"mứt" , price: 80000 , quantity:21 , category:"món ăn dân tộc Kinh"},
    { id:3 , name:"cơm lam" , price: 40000 ,quantity:15 , category:"món ăn dân tộc Mông"},
    { id:4 ,  name:"bánh đậu xanh" , price: 60000 , quantity : 30 , category : "món ăn dân tộc Kinh"},
];
let cart = [];
let choice;
do {
    choice = +prompt(`
        1.Hiển thị các sản phẩm theo tên danh mục.
        2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
        3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
            a.Tăng dần.
            b.Giảm dần.
        4.Tính số tiền thanh toán trong giỏ hàng.
        5.Thoát.
        Lựa chọn của bạn : `);
    switch (choice) {
        case 1:
            showProductByCategory();
            break;
        case 2:
            buyProduct();
            break;
        case 3:
            sortProductByPrice();
            break;
        case 4:
            payCart(cart);
            break;
        case 5:
            console.log("thoát");
            break;
        default:
            console.log("không có lựa chọn này");
            break;
    }
} while (choice !=5 );

function showProductByCategory() {
    let choice = +prompt(`
        1.Món ăn dân tộc Kinh.
        2.Món ăn dân tộc Mông.
        `);
        switch (choice) {
            case 1:
                let result1 = product.filter( i => i.category == "món ăn dân tộc Kinh"); 
                console.log(result1);
                break;
            case 2:
                let result = product.filter( i => i.category == "món ăn dân tộc Mông"); 
                console.log(result);
                break;
            default:
                console.log("không có lựa chọn này");
                break;
        }
    
}

function buyProduct() {
    let id = +prompt("Nhập id sản phẩm bạn muốn mua: ");
    let quantity = + prompt("Nhập số lượng sản phẩm bạn muốn mua: ");
    let productsChose = product.find(products => products.id ==id);
    if(productsChose.quantity >= quantity){
        productsChose.quantity -= quantity;
        console.log("Mua hàng thành công!");
        let item = {
            id: productsChose.id,
            name: productsChose.name,
            price: productsChose.price,
            quantity: quantity
        };
        cart.push(item);
    }else{
        console.log("Số lượng hàng không đủ!");
    }
}


//sắp xếp sản phẩm theo giá 
function sortProductByPrice() {
    let sapXep ;
    let choice = +prompt(`
        1.Tăng dần.
        2.Giảm dần.`);
    switch (choice) {
        case 1:
            for(let i = 0 ; i < product.length ; i++){
                for(let j = 0 ; j < product.length-i-1 ; j++){
                    if(product[j].price > product[j+1].price){
                        let temp = product[j];
                        product[j] = product[j+1];
                        product[j+1] = temp;
                    }
                }
            }        
            console.log("tăng dần : ",product);
            break;
        case 2:
            for(let i = 0 ; i < product.length ; i++){
                for(let j = i+1 ; j < product.length ; j++){
                    if(product[i].price < product[j].price){
                        let temp = product[i];
                        product[i] = product[j];
                        product[j] = temp;
                    }
                }
            }        
            console.log("gảm dần : ",product);
            break;
        default:
            break;
    }
}
//
function payCart(cart) {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].quantity; // Tính tổng tiền cho mỗi sản phẩm
    }
    console.log(sum);
}
//sap xep cach 2 : 
/* 
    let total = card.reduce((a,b) => a + b.price*b.quantity);
*/