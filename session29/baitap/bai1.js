let array=[];
let choice=0;
do{
    choice=+prompt(`
        1. them lien he
        2. hien thi danh ba
        3. tim kiem thong tin theo so dien thoai
        4. cap nhat thong tin theo ID
        5. xoa danh ba theo ID
        6. thoat`)
    switch(choice){
        case 1:
            addContact(array);
            break;
        case 2:
            printContact(array);
            break;
        case 3:
            searchContact(array);
            break;
        case 4:
            updateContact(array);
            break;
        case 5:
            deleteContact(array);
            break;
        case 6:
            console.log("da thoat chuong trinh");

    }
} while(choice != 6);
function addContact(array){
    let id = +prompt("nhap ID");
    do{
        if(!Number.isInteger(id) || (array.findIndex(item => item.id == id))!=-1){
            id=+prompt("ID sai, nhap lai");
        }
    } while(!Number.isInteger(id) || (array.findIndex(item => item.id == id))!=-1)
    let name = prompt("nhap ten");
    let email = prompt("nhap email");
    let phone = prompt("nhap so dien thoai");
    contact={
        id: id,
        name: name,
        email: email,
        phoneNumber: phone
    }
    array.push(contact);
    console.log("them thanh cong");
}
function printContact(array){
    if(array.length==0){
        console.log("danh ba trong");
    } else{
        console.log("danh ba:");
        console.log(array);
    }
}
function searchContact(array){
    let find=prompt("nhap so dien thoai muon tim");
    let foundContact=array.filter(item => item.phoneNumber.includes(find));
    if(foundContact.length==0){
        console.log("khong ton tai danh ba voi so dien thoai nay");
    } else{
        console.log(foundContact);
        console.log("in");
    }
}
function updateContact(array){
    let find=prompt("nhap ID muon sua");
    let foundContact=array.findIndex(item => item.id == find);
    if(foundContact==-1){
        console.log("khong ton tai danh ba voi ID nay");
    } else{
        console.log("thong tin cu");
        console.log(array[foundContact]);
        let id = +prompt("nhap ID");
        do{
            if(!Number.isInteger(id) || (array.findIndex(item => item.id == id))!=-1){
                id=+prompt("ID sai, nhap lai");
            }
        } while(!Number.isInteger(id) || (array.findIndex(item => item.id == id))!=-1)
        let name = prompt("nhap ten");
        let email = prompt("nhap email");
        let phone = prompt("nhap so dien thoai");
        contact={
            id: id,
            name: name,
            email: email,
            phoneNumber: phone
        }
        array.splice(foundContact, 1, contact);
        console.log("sua danh ba thanh cong");
    }
}
function deleteContact(array){
    let find=prompt("nhap ID danh ba muon xoa");
    let foundContact=array.findIndex(item => item.id == find);
    if(foundContact==-1){
        console.log("khong ton tai danh ba voi ID nay");
    } else{
        array.splice(foundContact, 1);
        console.log("xoa danh ba thanh cong");
    }
}