const heading = document.getElementById("heading");
console.log(heading);

let score = 6;

// Câu lệnh điều kiện chỉ có if
if (score > 5) {
  console.log("Đủ điều kiện qua môn");
}

// Câu lệnh điều kiện if-else
// Nếu thỏa mãn điều kiện thì vào trong if, sai điều kiện thì vào else

if (score > 8) {
  console.log("Học lực giỏi");
  heading.innerHTML = "Học lực giỏi";
} else {
  console.log("Chưa có cửa");
  heading.innerHTML = "Chưa có của";
}

// Câu lệnh có nhiều điều kiện khác nhau
// Nhập vào điểm trung bình của học sinh A và xếp loại học lực theo tiêu chí sau:
// Nếu dtb bé hơn 5 thì là học lực yếu
// Nếu dtb lớn hơn 5 và bé hơn hoặc bằng 6.4 là học lực trung bình
// Nếu dtb lớn hơn hoặc bằng 6.5 và bé hơn 7.9 là Khá
// Nếu dtb lớn hoặc bằng 8 và bé hơn 9 là Giỏi
// Từ 9 đến 10 là Xuất sắc
// Nếu điểm mà bé hơn 0 hoặc lớn 10

if (score < 0 || score > 10) {
  console.log("Điểm nhập sai. Yêu cầu nhập lại");
} else {
  if (score < 5) {
    console.log("Học lực yếu");
  } else if (score > 5 && score <= 6.4) {
    console.log("Học lực trung bình");
  } else if (score >= 6.5 && score <= 7.9) {
    console.log("Học lực khá");
  } else if (score >= 8 && score < 9) {
    console.log("Học lực giỏi");
  } else {
    console.log("Học lực xuất sắc");
  }
}

// Bài toán kiểm tra năm nhuận
// let year = +prompt("Nhập năm:");

// if (year % 4 === 0) {
//   // Năm nhuận tạm thời
//   if (year % 100 === 0) {
//     if (year % 400) {
//       console.log(year + " là năm nhuận");
//     } else {
//       console.log(year + " không phải năm nhuận");
//     }
//   } else {
//     console.log(year + " là năm nhuận");
//   }
// } else {
//   console.log(year + " không phải năm nhuận");
// }

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(year + " là năm nhuận");
// } else {
//   console.log(year + " không phải năm nhuận");
// }

// let flag = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// if (flag) {
//   console.log(year + " là năm nhuận");
// } else {
//   console.log(year + " không phải năm nhuận");
// }

let gender = 1;

if (gender === 0) {
  console.log("Giới tính Nam");
} else {
  console.log("Giới tính nữ");
}

// Toán tủ 3 ngôi
// Cú pháp: (điều_kiện) ? (giá trị đúng) : (giá trị sai)
let result = gender === 0 ? "Nam" : gender === 1 ? "Nữ" : "Khác";
console.log("Result ", result);

// Câu trúc điều khiển switch-case
// Trường hợp sử dụng: một chương trình mà có nhiều điều kiện
// Cú pháp:
// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

// Yêu cầu người dùng nhập vào lựa chọn +, -, * , /
let key = "%";

switch (key) {
  case "+":
    console.log("Đây là phép cộng");
    break;
  case "-":
    console.log("Đây là phép trừ");
    break;
  case "*":
    console.log("Đây là phép nhân");
    break;
  case "/":
    console.log("Đây là phép chia");
    break;
  default:
    console.log("Giá trị nhập vào không hợp lệ");
    break;
}

console.log(Math.random()); // Tạo một số ngẫu nhiên từ 0 đến < 1
console.log(Math.abs(-7)); // Giá trị tuyệt đối
console.log(Math.pow(2, 64)); // Hàm mũ
console.log(Math.ceil(1.6)); // Làm tròn trên
console.log(Math.floor(1.6)); // Làm tròn dưới
console.log(Math.round(1.4)); // Phần thập phân >=5 thì làm tròn
console.log(Math.sqrt(9)); // Căn bậc 2
console.log(Math.PI);
