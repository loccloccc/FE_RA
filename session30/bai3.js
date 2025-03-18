let listSmartphone = [
    {id: 1, name: "SamSung-M20", price: 1000000, quantity: 20, company: "SamSung"},
    {id: 2, name: "SamSung-A20", price: 1000000, quantity: 20, company: "SamSung"},
    {id: 3, name: "Iphone16-ProMax", price: 1000000, quantity: 20, company: "Apple"},
    {id: 4, name: "Xiaomi-Mi", price: 1000000, quantity: 20, company: "Xiaomi"},
];

let choice;
let cart = [];

do {
    choice = +prompt(`
        1. Hiển thị danh sách điện thoại theo hãng
        2. Thêm điện thoại mới vào cửa hàng (Nhập thông tin: id, tên điện thoại, giá, số lượng, hãng)
        3. Tìm kiếm điện thoại theo tên hoặc id
        4. Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
        5. Thanh toán tất cả điện thoại trong giỏ hàng (Thông báo thanh toán thành công, và xóa toàn bộ giỏ hàng)
        6. Sắp xếp điện thoại theo giá:
            a. Tăng dần
            b. Giảm dần
        7. Hiển thị tổng số tiền của các điện thoại trong kho
        8. Hiển thị tổng số lượng điện thoại theo từng hàng (VD: samsung - 5, iphone - 3,...)
        9. Thoát chương trình
        Lựa chọn của bạn: `);

    switch (choice) {
        case 1:
            showSmartphone(listSmartphone);
            break;
        case 2:
            addSmartphone(listSmartphone);
            break;
        case 3:
            searchSmartphone(listSmartphone);
            break;
        case 4:
            addSmart(listSmartphone, cart);
            break;
        case 5:
            totalMoney(cart);
            break;
        case 6:
            sortSmartphone(listSmartphone);
            break;
        case 7:
            totalMoneyInStock(listSmartphone);
            break;
        case 8:
            totalQuantityByCompany(listSmartphone);
            break;
        case 9:
            console.log("Thoát");
            break;
        default:
            console.log("Không có lựa chọn này");
            break;
    }
} while (choice != 9);


// Hiển thị điện thoại theo hãng
function showSmartphone(listSmartphone) {
    let choice = +prompt(`
        1. SamSung
        2. Apple
        3. Xiaomi`);
    switch (choice) {
        case 1:
            let res1 = listSmartphone.filter(i => i.company === "SamSung");
            console.log(res1);
            break;
        case 2:
            let res2 = listSmartphone.filter(i => i.company === "Apple");
            console.log(res2);
            break;
        case 3:
            let res3 = listSmartphone.filter(i => i.company === "Xiaomi");
            console.log(res3);
            break;
        default:
            break;
    }
}


// Thêm điện thoại vào cửa hàng
function addSmartphone(listSmartphone) {
    let idAddSmartphone = listSmartphone.length === 0 ? 1 : listSmartphone[listSmartphone.length - 1].id + 1;
    let addName = prompt("Mời nhập điện thoại mới: ");
    let addPrice = +prompt(`Mời bạn nhập giá tiền cho điện thoại ${addName}: `);
    let addQuantity = +prompt("Mời bạn nhập số lượng điện thoại: ");
    let addCompany = prompt("Mời nhập tên hãng: ");
    let newSmartphone = {
        id: idAddSmartphone,
        name: addName,
        price: addPrice,
        quantity: addQuantity,
        company: addCompany,
    };
    listSmartphone.push(newSmartphone);
    console.log(listSmartphone);
}

// Tìm kiếm điện thoại theo id hoặc tên
function searchSmartphone(listSmartphone) {
    let choice3 = prompt(`Tìm kiếm theo?
        (0. Tìm theo id
         1. Tìm theo tên)`);
    if (choice3 == 0) {
        let findId = prompt("Nhập ID điện thoại muốn tìm");
        let smartFound = listSmartphone.filter(item => item.id.toString().includes(findId));
        if (smartFound.length !== 0) {
            console.log("Kết quả cho ID = ", findId);
            console.log(smartFound);
        } else {
            console.log("Không có điện thoại với ID này");
        }
    } else if (choice3 == 1) {
        let findName = prompt("Nhập tên điện thoại muốn tìm");
        let smartFound = listSmartphone.filter(item => item.name.includes(findName));
        if (smartFound.length !== 0) {
            console.log("Kết quả cho tên = ", findName);
            console.log(smartFound);
        } else {
            console.log("Không có điện thoại với tên này");
        }
    }
}

// Thêm điện thoại vào giỏ hàng
function addSmart(listSmartphone, cart) {
    let buyId = +prompt("Nhập ID điện thoại muốn mua");
    let buyQuantity = +prompt("Nhập số lượng muốn mua");
    let buyIndex = listSmartphone.findIndex(item => item.id === buyId);
    if (buyIndex === -1) {
        console.log("Không có điện thoại với ID này");
    } else {
        if (listSmartphone[buyIndex].quantity >= buyQuantity) {
            let cartIndex = cart.findIndex(item => item.id === buyId);
            if (cartIndex === -1) {
                cart.push({ ...listSmartphone[buyIndex], quantity: buyQuantity });
            } else {
                cart[cartIndex].quantity += buyQuantity;
            }
            listSmartphone[buyIndex].quantity -= buyQuantity;
            console.log("Thêm vào giỏ hàng thành công");
        } else {
            console.log("Không đủ số lượng điện thoại trong kho");
        }
    }
}

// Thanh toán giỏ hàng
function totalMoney(cart) {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống");
    } else {
        let sum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        console.log("Tổng số tiền là: ", sum);
    }
}

// Sắp xếp điện thoại theo giá
function sortSmartphone(listSmartphone) {
    let choice5 = +prompt(`Sắp xếp theo giá:
        (0. Tăng dần
         1. Giảm dần)`);
    if (listSmartphone.length === 0) {
        console.log("Kho không có điện thoại");
    } else {
        if (choice5 === 0) {
            listSmartphone.sort((a, b) => a.price - b.price);
            console.log(listSmartphone);
        } else if (choice5 === 1) {
            listSmartphone.sort((a, b) => b.price - a.price);
            console.log(listSmartphone);
        }
    }
}

// Hiển thị tổng số tiền của các điện thoại trong kho
function totalMoneyInStock(listSmartphone) {
    let sum = listSmartphone.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log("Tổng số tiền trong kho là: ", sum);
}

// Hiển thị tổng số lượng điện thoại theo từng hãng
function totalQuantityByCompany(listSmartphone) {
    let companies = listSmartphone.reduce((acc, item) => {
        acc[item.company] = (acc[item.company] || 0) + item.quantity;
        return acc;
    }, {});
    console.log(companies);
}

// Hiển thị các điện thoại trong cửa hàng
function printSmart(listSmartphone) {
    for (let i = 0; i < listSmartphone.length; i++) {
        console.log("Tên: ", listSmartphone[i].name, " - Số lượng: ", listSmartphone[i].quantity);
    }
}
