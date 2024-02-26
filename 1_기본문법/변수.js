//var

//undefined; > 변수는 선언했으나 값을 할당하지 않음
console.log(변수var);
//var 키워드 작성
//var 변수var 변수에 식별자선언
var 변수var;
변수var = "재할당";
console.log(변수var);
//console.log(변수let); > let은 호이스팅 없어서 안나옴

//let

//선언+할당=초기화
let 변수let = "변수let";
console.log(변수let); //변수let
변수let = "재할당";
console.log(변수let); //재할당
var 변수var = "중복선언가능";
console.log(변수var);
//let 변수let = "중복선언불가능"

//const

// const a;//undefined
// a=1;  >const 선언만 하고 할당 나중에 불가 한번에 초기화해야함

const 변수const = "상수변수";
console.log(변수const);

//자료형 data type
//number 숫자자료형
//= > 대입연산자(할당연산자) : 값을 변수에 할당함
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
document.write(sum, typeof sum);
console.log(typeof num1);

//string 문자자료형
num1 = "10"; //글자는 따옴표안에 쓴다.
num2 = "20";
let num3 = 50;
sum = num1 + num2 + num3;
document.write("<br>", sum, typeof sum);
console.log(typeof sum);
//따옴표를 안 할 수 있는 자료는 식별자, 숫자만!
//num1 = 가; >""로 묶어줘야함

//자바스크립트는 유동적으로 자료형이 바뀜

//참조형(배열,객체,함수)
// [] : 리터럴 Array literal
const 배열 = ["짜장면", "짬뽕", "짬짜면", 9];
//배열은 자료를 인덱스 번호로 관리
document.write("<hr>" + 배열);
document.write("<hr>" + 배열[0]);
document.write("<hr>" + 배열[3]);
document.write("<hr>" + 배열[0] + 배열[2]);
document.write("<hr>" + 배열[0] + 배열[2 + 1] + "<hr>");
console.log(배열);
// 배열.forEach((매변1, 매변2) => {
//     document.write("<hr>" + 매변1);
//     console.log(a, b);
// });

배열.forEach(function (매변1, 매변2) {
    document.write("<hr>👩" + 매변1);
    document.write("<hr>👩" + 매변2);
});

//객체
//값의 구분을 속성(또는 키)으로 함
const 객체 = {
    아저씨: "👨",
    나이: 50,
    동작: function () {
        alert("아빠왔다");
    },
};
console.log(객체);
document.write("<hr><hr>", 객체.아저씨, 객체.나이);
객체.동작();
//객체는 값의 구분을 속성으로 함
//배열은 값의 구분을 인덱스번호로 함
