let  students=[
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }
];
let arrScores = [];
let ave = 0;
for (let i = 0; i < students.length; i++) {
    ave = (students[i].scores.math + students[i].scores.english + students[i].scores.literature)/(students.length);
    arrScores.push(ave.toFixed(2));
}
let max = arrScores[0];
for(let i = 0 ; i < arrScores.length ; i++){
    for(let j = 0 ; j < arrScores.length ; j++){
        if(max < arrScores[i]){
            max = arrScores[i];
        }
    }
}
console.log("số điểm lớn nhất là : ",max);

