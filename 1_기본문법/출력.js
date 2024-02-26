//Window.prompt(); >윈도우는 안불러도 자기인줄 알아서 안써두댐
//알림창으로 출력하기
//alert("출력"); //함수

//확인창으로 출력하기
//confirm("출력계속"); > 내용저장 피료없으면 변수없이 가능
let 확인창 = confirm("출력계속");
console.log(확인창);
if (확인창 === false) {
    document.write("취소누름");
}

//입출력하기
prompt("출력해", 확인창);
prompt(확인창, 확인창); //변수 넣어두댐

//개발자용창(console)로 출력하기
console.clear() //콘솔창지워주기

//웹페이지로 출력하기
document.write("출력") //.은 도큐먼트 하위의 속성을 부를때 씀
