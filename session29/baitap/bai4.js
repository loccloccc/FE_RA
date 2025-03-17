let array=[];
let choice=0;
do{
    choice=+prompt(`
        1. them cong viec moi
        2. hien thi cong viec
        3. cap nhat trang thai cong viec theo ID
        4. loc cac cong viec theo trang thai
        5. sap xep cong viec theo trang thai cong viec
        6. thoat`)
    switch(choice){
        case 1:
            addJob(array);
            break;
        case 2:
            printJob(array);
            break;
        case 3:
            updateJob(array);
            break;
        case 4:
            filterJob(array);
            break;
        case 5:
            sortJob(array);
            break;
        case 6:
            console.log("da thoat chuong trinh");

    }
} while(choice != 6);
function addJob(array){
    let id = +prompt("nhap ID");
    do{
        if(!Number.isInteger(id) || (array.findIndex(item => item.id == id))!=-1){
            id=+prompt("ID sai, nhap lai");
        }
    } while(!Number.isInteger(id) || (array.findIndex(item => item.id == id))!=-1)
    let name = prompt("nhap ten cong viec");
    let description = prompt("nhap mo ta cong viec");
    let time = prompt("nhap thoi gian bat dau");
    let status = +prompt(`nhap trang thai cong viec
        (0. chua hoan thanh
         1. hoan thanh)`);
    do{
        if(status!=0 && status!=1){
            status=+prompt(`nhap 0 or 1
                (0. chua hoan thanh
                 1. da hoan thanh)`);
        }
    } while(status!=0 && status!=1)
    Job={
        id: id,
        name: name,
        description: description,
        time: time,
        status: (status==1)? "da hoan thanh" : "chua hoan thanh" 
    }
    array.push(Job);
    console.log("them thanh cong");
}
function printJob(array){
    if(array.length==0){
        console.log("danh sach cong viec trong");
    } else{
        console.log("danh sach cong viec:");
        console.log(array);
    }
}
function updateJob(array){
    let find=prompt("nhap ID cong viec muon sua");
    let foundJob=array.findIndex(item => item.id == "da hoan thanh");
    if(foundJob==-1){
        console.log("khong ton tai cong viec voi ID nay");
    } else{
        let status = +prompt(`sua trang thai cong viec
            (0. chua hoan thanh
             1. hoan thanh)`);
        do{
            if(status!=0 && status!=1){
                status=+prompt("trang thai ko hop le, nhap lai");
            }
        } while(status!=0 && status!=1)
        array[foundJob].status= status==1? "da hoan thanh" : "chua hoan thanh"
        console.log("sua trang thai cong viec thanh cong");
    }
}
function filterJob(array){
    let choice4=prompt(`loc theo hoan thanh or chua hoan thanh
        (0. chua hoan thanh
         1. da hoan thanh)`);
    do{
        if(choice4!=1 && choice4!=0){
            choice4=prompt(`nhap 0 or 1
                (0. chua hoan thanh
                 1. da hoan thanh)`);
        }
    } while(choice4!=1 && choice4!=0)
    if(choice4==1){
        let done=array.filter(item => item.status=="da hoan thanh");
        if(done.length==0){
            console.log("khong co cong viec da hoan thanh");
        } else{
            console.log("danh sach cong viec da hoan thanh:");
            console.log(done);
        }
    } else if(choice4==0){
        let notDone=array.filter(item => item.status=="chua hoan thanh");
        if(notDone.length==0){
            console.log("khong co cong viec chua hoan thanh");
        } else{
            console.log("danh sach cong viec chua hoan thanh:");
            console.log(notDone);
        }
    }
}
function sortJob(array){
    let sortedArr=array.sort((a, b) => a.status.localeCompare(b.status));
    if(sortedArr==0){
        console.log("khong co cong viec");
    } else{
        console.log(sortedArr);
    }
}