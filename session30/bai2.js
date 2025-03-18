let storage = [];
let cart=[];
let choice=0;
do{
    choice = +prompt(`
        1. hien thi danh sach sach theo the loai
        2. them sach moi vao kho
        3. tim kiem sach theo ten hoac ID
        4. mua sach
        5. sap xep sach theo gia tang dan hoac giam dan
        6. tinh tong luong sach da mua va thanh toan tien
        7. hien thi tong so sach trong kho
        8. thoat`);
    switch(choice){
        case 1:
            showStorage(storage);
            break;
        case 2:
            addStorage(storage);
            break;
        case 3:
            searchBook(storage);
            break;
        case 4:
            addBook(storage, cart);
            break;
        case 5:
            sortBook(storage);
            break;
        case 6:
            totalMoney(cart);
            break;
        case 7:
            showAll(storage);
            break;
        case 8:
            console.log("da thoat chuong trinh");
    }
} while(choice!=8);

function showStorage(storage){
    if(storage.length==0){
        console.log("kho khong co sach");
    } else{
        let find=prompt("nhap the loai sach muon xem");
        let found=storage.filter(item => item.category==find);
        if(found.length==0){
            console.log("khong co sach the loai nay trong kho");
        } else{
            console.log("danh sach sach the loai " + find + ":");
            console.log(found);
        }
    }
}
function addStorage(storage){
    let id = +prompt("nhap ID sach");
    do{
        if(!Number.isInteger(id) || (storage.findIndex(item => item.id == id))!=-1){
            id=+prompt("ID khong hop le, nhap lai");
        }
    } while(!Number.isInteger(id) || (storage.findIndex(item => item.id == id))!=-1)
    let name = prompt("nhap ten sach");
    let price = +prompt("nhap gia sach");
    let quantity = +prompt("nhap so luong sach");
    let category = prompt("nhap the loai sach");
    book={
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        category: category
    }
    storage.push(book);
    console.log("them thanh cong");
}
function searchBook(storage){
    let choice3=prompt(`tim kiem theo?
        (0. tim theo id
         1. tim theo ten)`);
    if(choice3==0){
        let findId=prompt("nhap ID sach muon tim")
        let bookFound=storage.filter(item => item.id.toString().includes(findId));
        if(bookFound.length!=0){
            console.log("ket qua cho ID = ", findId);
            console.log(bookFound);
        } else{
            console.log("khong co sach voi ID nay");
        }
    } else if(choice3==1){
        let findName=prompt("nhap ten sach muon tim")
        let bookFound=storage.filter(item => item.name.includes(findName));

        //c2 : let a = a.filter((b) => b.name.toLowerCase().inclduse(name.toLowerCase()))
        if(bookFound.length!=0){
            console.log("ket qua cho ten = ", findName);
            console.log(bookFound);
        } else{
            console.log("khong co sach voi ten nay");
        }
    }
}
function addBook(storage, cart){
    let buyId=prompt("nhap ID sach muon mua");
    let buyQuantity=+prompt("nhap so luong muon mua");
    let buyIndex=storage.findIndex(item =>item.id==buyId);
    if(buyIndex==-1){
        console.log("khong co sach voi ID nay");
    } else{
        if(storage[buyIndex].quantity>=buyQuantity){
            let cartIndex=cart.findIndex(item => item.id==buyId);
            if(cartIndex==-1){
                cart.push({...storage[buyIndex], quantity: buyQuantity});
            } else{
                cart[cartIndex].quantity+=buyQuantity;
            }
            storage[buyIndex].quantity-=buyQuantity;
            console.log("them vao gio hang thanh cong");
        } else{
            console.log("khong du so luong sach trong kho");
        }
    }
}
function sortBook(storage){
    let choice5=+prompt(`sap xep theo gia
        (0. tang dan
         1. giam dan)`);
    if(storage.length==0){
        console.log("kho khong co sach");
    } else{
        if(choice5==0){
            let sortedStorage=storage.sort((a, b) => a.price - b.price);
            console.log(sortedStorage);
        } else if(choice5==1){
            let sortedStorage=storage.sort((a, b) => b.price - a.price);
            console.log(sortedStorage);
        }
    }
}
function totalMoney(cart){
    if(cart.length==0){
        console.log("gio hang trong");
    } else{
        console.log(cart);
        let sum=cart.reduce((sum, item) => sum + item.price*item.quantity, 0);
        console.log("tong so tien la: ", sum);
    }
}
function showAll(storage){
    console.log(storage);
}