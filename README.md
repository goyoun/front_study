# 제목입니다
## 제목입니다
### 제목입니다
#### 제목입니다
### 각자 github에 front_study 라는 repository를 만들어서 현재 폴더를 git에 업로드
- 텍스트 내용
    - 안녕하세요
1. 숫자내용
2. 숫자내용
```
int a = 10;
```
1. 안녕하세요


# 수업 내용 정리
## front 1일차 (20211109)
### 인라인 요소(inline element), 블록 요소(block element)
1. 인라인 요소
    - 태그 내용을 표현하고 줄이 바뀌지 않음.
    - 보통 텍스트 내용만큼만 영역을 차지하게 됨.
    - 가로, 세로 크기를 따로 지정할 수 없음.
        -가로, 세로 크기를 따로 지정하고 싶으면 css로 블록 요소로 지정해야함
    - 대표적인 인라인 요소
        - span, a 등
2. 블록 요소
    - 태그 내용을 표현하고 줄이 바뀜
    - 텍스트 내용과는 상관없이 한줄을 모두 차지함.
    - 가로, 세로크기를 지정할 수 있음.
    - 대표적인 블록 태그
        - div, h1~h6 등

    ### 주로 사용하게 될 태그들
    ```
    - <style>, <script>, <h1>, <p> <div>, 
    - <form> <input> <button> <select>
    ```
    ### UI/UX
    ```
    - UI (User interface) : 화면 , GUI(Graphical User Interface) / 얼마나 보기 좋나
    - UX (User Experience) : 사용자 경험. / 얼마나 쓰기좋나
    ```
    ### 경로 지정시 사용하는 방법
    ```
    - ./ : 현재 파일이 있는 폴더를 가리킴.
    - ../ : 현재 폴더에서 한수준 위로 올라가는 폴더를 가리킴.
    ```

    ### form 태그
    1. form 시작태그에 작성하는 속성
    ```
    <form action="주소값" method="get or post">
    ```
        - action : form 태그에 작성된 내용을 전송할 주소
            - 보통 백엔드에서 받는 주소를 사용함.
            - 백엔드에는 해당 주소를 처리해주는 컨트롤러 클래스의 메서드가 있음.
        - method : action에 작성한 주소로 데이터를 전송할 때 사용할 전송방식
            - 여기서 전송방식이라는 것은 http 프로토콜의 전송방식을 의미함.
            - http 전송방식 (rest api)
                - get : read 역할 (select)
                    - 주소창에 전송하는 데이터가 모두 노출됨.
                    - 검색어 또는 데이터가 노출되어도 문제 없는 상황에서 사용.
                - post : create 역할 (insert)
                    - 주소창에 전송하는 데이터가 노출되지 않음.
                    - 회원가입, 로그인 등 노출되지 않아야 하는 상황
                - put : update 역할 (update)
                - delete : delete 역할 (delete)
            - form 태그의 method 에는 get/post만 사용가능
            - http(hyper text transfer protocol) : 쉽게 말해서 인터넷 상에서 정보를 주고 받는 프로토콜
                - http는 대부분 요청(request, req) / 응답<response, res)이 있다.
                    -frontend(client) -> backend(server) : 요청
                        - server : java, db
                        - client : html, css, javascript
                    - backend -> frontend: 응답
                - 우리가 인터넷을 한다는 것은 서버에 요청을 하는 것이고 그에 대한 결과를 화면으로 보는 것이 응답.
                - 따라서 인터넷을 할 때 주소창에 http:// 가 붙는 것이라고 보면 된다.
                    - 요즘 https는 secure(보안) 이 추가 됐다고 보면됨.
                - 프로토콜(protocol) : 특정 통신 방식에서 규정하는 규칙을 의미
                - ftp, tcp, ip 등에 붙는 p는 모두 프로토콜임.
2. input 태그
- type 속성
    -text : 텍스트 입력칸이 만들어짐.
    -submit : form태그에 작성한 내용을 action 속성에 작성한 주소로 보낼 수 있음.

- 네이버 검색창을 분석해보자
    - 네이버 검색 요청 주소 :  https://search.naver.com/search.naver
    - 검색어를 담는 파라미터 이름: query
    - 검색 요청 방식: get

3. 이름을 일관성 있게
- front 화면의 name속성값, DTO 클래스 필드이름, DB 컬럼명을 모두 동일하게 가는 것이 정신건강에 좋다.

4. css 는 bootstrap을 주로 이용할 계획

## 수업내용 2일차 (20211110)
1. js 프레임워크
- react.js, node.js, vue.js

## 수업 내용 3일차 (20211111)
1. javascript funtion
- 함수(자바의 메서드랑 비슷)
- 특정 기능을 수행하는 코드블록
- 호충해줘야 실행
- 특정 이벤트가 발생했을 때 함수를 호출
    - 특정 이벤트?
        -click, doubleclick, mouse over, writhing, keyup, keydown
- 매개변수, 리턴 등 있음.

2. id속성 vs class속성
- id속성
    - 한 문서 안에서 id 속성값은 유일해야 한다.
- class 속성
    - css 적용할 때 많이 사용함.
    - 여러 태그에 동일한 class 값을 적용할 수 있다.
    - 한번에 여러 class를 동시에 적용할 수 있다.
        -ex) p태그에 class1, class2 , class3 을 동시에 적용하고 싶다면
        ```
        <p class="class1 class2 class3"> </p>
        ```
        이렇게 가능하다.

3. DOM 가져오기
- 대부분 document. 으로 시작함.
    - document는 현재 html 문서를 가리킴.
- getElementById('id'속성값)
    -  현재 html에 작성된 태그 중 특정 id 속성값을 가지고 있는 요소를 가져옴.
- querySelector()
    - id, class, 태그 등 여러 요소를 가져올 수 있음.
    - id를 가져올 때는 id앞에 #을 붙여야 함.
        - ex) id1 이라는 요소를 가져온다면 document.querySelector('#id')
    - class를 가져올 때는 class 앞에 .을 붙여야 함.
        - ex) class1 이라는 요소를 가져온다면 document.querySelctor('.class1')
- getElementByid ('id 속성값')
    - 현재 html에 작성된 태그 중 특정 id속성값을 가지고 있는 요소를 가져옴.
- querySelector()




##
비밀번호에 네이버와 같은 정규식을 적용해서
1. 입력했는지 체크
2. 정규식체크
3. 자릿수 체크 등을 하고
4. 일치여부 체크
각 체크 결과에 따라 입력칸 아래에 메세지를 출력해보세요

## 수업내용 6일차 (20211116)
1. 크기 단위
- px, %, em, rem 등
- em : 자신의 부모요소의 폰트 사이즈 기준
- rem : html 폰트 사이즈 기준 기본 폰트사이즈 16px

## 수업내용 7일차(20211117)
1. 포트폴리오 git에 업로드할 때
- repository 주소는 반드시
    -본인username.github.io 로 만들것
- 계정당 하나밖에 못만듬
- 메인 페이지는 반드시 index.html 이어야함.
2. singup.html 회원가입 항목
- 여기도 간단하게 부트스트랩을 적용해보시기 바랍니다.
- 아이디
    - 정규식 적용할 것
- 비밀번호
    - 정규식 적용할 것
- 비밀번호 확인
    - 일치여부 출력
- 이메일
    - 도메인은 select 이용
- 성별
    - radio 버튼 이용
- 전화번호
    - 정규식 적용할 것
- 주소
    - 다음 api 활용할 것