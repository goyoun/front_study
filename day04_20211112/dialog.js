const btn1 = document.getElementById("id2");
const btn2 = document.getElementById("id3");

// addEventListener 를 이용하여
// id2가 적용된 버튼을 클릭했을 때 익명함수 호출
btn1.addEventListener('click',function(){
    console.log('id2 버튼 클릭함.');
    const result = confirm('컨펌함수입니다.');
    // 확인 : true , 취소 : false
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
    const result = prompt('프롬프트 함수입니다.');
    console.log(result);
}

function alertFunction() {
    console.log('alertFunction 호출됨');
    alert('이런거도가능');
}