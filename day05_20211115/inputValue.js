const input1 = document.getElementById('id1');
input1.addEventListener('keyup', fun1);

const input2 = document.getElementById('id2');
input2.addEventListener('blur', fun2);

const input3 = document.getElementById('btn1');
input3.addEventListener('click', fun3);


function fun1() {
    // console.log('함수호출')
    const ele = document.getElementById('id1');
    // input tag 안에 입력된값을 가져옴
    console.log(ele.value);
}

function fun2(){
    console.log('onblur')
    const ele = document.getElementById('id2');
    console.log(ele.value);
}

function fun3() {
    const ele = document.getElementById('id3');
    // console.log(ele.value);
    // ele.value = '이 내용은 어디에 나올까요';
    const text = '하하하하'
    ele.value = text;
}