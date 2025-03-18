let Purchased_Course = [];// lưu các khóa học đã mua
let member = [];// lưu người dùng



function main() {// hàm chính
    let t = true;
    while (t) {
        let options = Number(prompt(`1: Quản lí khóa học lí khóa học.
2: Quản lí người dùng.
3: Thoát.`));
        switch (options) {
            case 1://quản lí khóa học
                CourseManagement();
                break;
            case 2:// quản lí người dùng
                UserManagement();
                break;
            case 3:
                t = false;
                break;
            default:
                alert("Không hợp lệ");
        }
    }
}

main();

function CourseManagement() {//quản lí khóa học_______________________________________-xong
    let t = true;
    while (t) {
        let choice = Menucourse();
        switch (choice) {
            case 1:
                add(Purchased_Course, 1);
                break;
            case 2:
                search(Purchased_Course);
                break;
            case 3:
                deletecourt(Purchased_Course);
                break;
            case 4:
                t = false;
                break;
            case 5:
                viewMenu(Purchased_Course);
                break;
            default:
                break;
        }
    }
}

function Menucourse() {//menu quản lí khóa học
    return Number(prompt(`1.Thêm khóa học.
2.Tìm kiếm khóa học theo tên.
3.Xóa khóa học.
5.xem khóa học đang có.
4.Thoát.`));
}

function UserManagement() {// quản lí người dùng________________________________________chưa xong
    let t = true;
    while (t) {
        let choice = Menuuser();
        switch (choice) {
            case 1:
                add(member, 2);
                break;
            case 2:
                Registercourse();
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                t = false;
                break;
            default:
                break;
        }
    }
}

function Menuuser() {// melu quản lí người dùng
    return Number(prompt(`1.Thêm người dùng mới.
2.Đăng ký khóa học.
3.Hủy đăng ký khóa học.
4.Hiển thị danh sách khóa học của một người dùng.
5.Thoát.`));
}

function MyCourse(A) {// thông tin một khóa học
    return {
        id: validate(1, A),
        name: validate(2, A),
        instructor: validate(3, A),
        students: []//danh sách người dùng đăng kí khóa học
    }
}