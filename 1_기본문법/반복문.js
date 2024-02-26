//html요소 선택하기
//querySelectorAll : html요소 선택할 때 사용됨 (= $(""))
document.querySelectorAll(".for li");
console.log(document.querySelector(".for li"));
console.log(document.querySelectorAll(".for li"));

//for(초기값;조건문(트루나펄스나오는걸로 해야함);증가식){}

let fors = document.querySelectorAll(".for li");
for (let 번호 = 0; 번호 < 2; 번호++) {
    //실행문
    console.log(번호);
    fors[번호].innerHTML = 번호;
}
//.innerHTML html 안에 넣어주라는뜻
//forsof

const forsof = document.querySelectorAll(".forof li");
//for(변수 of 배열){} of:연산자
for (에라이 of forsof) {
    console.log(에라이);
    console.log(forsof);
    에라이.innerHTML = "과제";
}

//forEach
//foreachs
const foreachs = document.querySelectorAll(".foreach li");
//배열.forEach() > 함수임
foreachs.forEach(function (에라이, 번호) {
    에라이.innerHTML = 번호;
});
