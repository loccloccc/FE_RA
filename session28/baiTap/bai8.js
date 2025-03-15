let employees = []; 
while (true) {
  let choice = +prompt(
    `
        1.Thêm nhân viên mới.
        2.Xóa nhân viên theo id.
        3. Cập nhật mức lương của nhân viên theo id
        4. Tìm kiếm nhân viên theo tên.
        5. Thoát
        Lựa chọn của bạn :  
              `
  );
  switch (choice) {
    case 1:
      // thêm nhân viên
      addNewEmployee();
      break;
    case 2:
      deleteEmployee();
      break;
    case 3 :
        updateWage();
        break ;
    case 4 :
        searchEmployee();
        break;
    default:
        console.log("không có lựa chọn này");
      break;
  }
  if (choice == 5) {
    break;
  }
}
// function thêm nhân viên
function addNewEmployee() {
    let quanlity = +prompt("mời bạn nhập số nhân viên muốn thêm : ");
    for (let i = 0; i < quanlity; i++) {
        let name1 = prompt("nhập tên nhân viên : ");
        let position = prompt("nhập chức cụ nhân viên : ");
        let salary = +prompt("mời nhập lương nhân viên ");
        let id = +prompt("mời bạn nhập mã nhân viên : ")
        // tạo đối tượng nhân viên
        let employee = {
          id: id,
          name: name1,
          salary: salary,
          position: position,
        };
        // thêm nhân viên vào trong mảng
        employees.push(employee);
    }
  console.log("thêm nhân viên thành công", employees);
}
// hàm đi xóa nhân viên theo id
function deleteEmployee() {
  let id = +prompt("nhập id nhân viên muốn xóa");
  let findIndex = employees.findIndex((item) => item.id == id);
  if (findIndex != -1) {
    let confitmDelete = confirm("bạn có muốn xóa hay không?");
    if (confitmDelete) {
      employees.splice(findIndex, 1);
      console.log("xóa nhân viên thành công!");
    }
  } else {
    console.log("không tìm thấy nhân viên có id là: ", id);
  }
}

function updateWage(){
    let id = +prompt("mời bạn nhập id nhân viên muốn cập nhật lương : ");
    let findIndex = employees.findIndex((item) => item.id == id);
  if (findIndex != -1) {
    let confitmDelete = confirm("bạn có muốn cập nhật lương cho nhân viên hay không?");
    let luong = +prompt("mời bạn nhập lương : ");
    if (confitmDelete) {
      employees[findIndex].salary = luong;
      console.log("cập nhập lương  nhân viên thành công!");
    }
  } else {
    console.log("không tìm thấy nhân viên có id là: ", id);
  }
}
function searchEmployee() {
    let name = prompt("Nhập tên nhân viên muốn tìm: ").toLowerCase();
    let result = employees.filter((item) =>
      item.name.toLowerCase().includes(name)
    );
  
    if (result.length > 0) {
      console.log("Nhân viên tìm thấy:", result);
    } else {
      console.log("Không tìm thấy nhân viên có tên:", name);
    }
  }
