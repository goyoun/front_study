const btn1 = document.getElementById("id2");
const btn2 = document.getElementById("id3");

function alertFunction() {
    console.log('alertFunction 호출됨');
    alert('이런거도가능');
}

// addEventListener 를 이용하여
// id2가 적용된 버튼을 클릭했을 때 익명함수 호출
btn1.addEventListener('click',function(){
    console.log('id2 버튼 클릭함.');
    const result = confirm('이런거도가능2');
    if (result) {
        console.log("확인을 누르셨네요");
    } else {
        console.log("취소를 누르셨네요");
    }
});

// addEventListener를 이용하여
// id3가 적용된 버튼을 클릭했을때
// promptFunction 함수 호출
btn2.addEventListener('click',promptFunction);
function promptFunction() {
    console.log('fun3 함수 호출');
    prompt('이런거도가능3');
}
