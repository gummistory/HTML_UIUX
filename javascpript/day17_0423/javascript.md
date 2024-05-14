* 자바 스크립트 사용 방식
 1. 임베디드한 방식
    <p onclick="alert('hello')">여기를 클릭하세요1</p>
2. 내부에 정의하는 방식
    <script>
        function message (){
            alert('hello');
        }
    </script>
    <p ondblclick="message()">여기를 클릭하세요2</p>
3. 외부에 정의하는 방식
    <script src="test01.js"></script>
    <p ondblclick="message2()">여기를 클릭하세요3</p>

4. 숫자가 맨 앞에 오면 안됨
5. 예약어 안됨 : document
6. 대문자 구분 
7. var, let, const

* 조건식 
= 0, null, ""(빈문자),undefined
= 제외한 나머지 값들 = true

if(){
    if(){

    }else{

    }else{
        
    }
}


* alert() : 메세지 띄어 놓기, 경고창