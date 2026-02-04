let students="Qúy Nam Lan Hùng Nam";
console.log("Mảng:",students.split(" "));
let find = students.includes("Lan");
if(find!=-1){
    console.log("Tên Lan có tồn tại trong mảng");
}else{
    console.log("Tên Lan không tồn tại trong mảng");
}
console.log("students sau khi reverse:".students);
students.reverse();
//Phương thức reverse có làm thay đổi mảng gốc
let firstIndex=students.indexOf("Nam");
console.log("Vị trí đầu tiên của tên Nam ",firstIndex);