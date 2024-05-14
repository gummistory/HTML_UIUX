1. 유효성 체크를 위한 checkForm 함수 선언. 입력 양식들의 검사 방법을 정의한다.

<html>
 <meta charset="UTF-8">
  <head>
	<script>
    
    //저장 버튼을 누르면 호출되는 checkForm 함수 선언
    function checkForm(){
    		alert( "로그인 가능 이상 없음" );




            1-1. 아이디

조건 : 첫글자 영어 소문자

두번째는 영어소문자 또는 숫자 또는 _ 중 하나

두번째 문자가 6~14개 나와야함. 즉, 전체문자 길이는 첫글자 포함 7~15자.

	//사용자가 웹브라우저 화면에서 입력한 [아이디값]을 가져와 uid 변수에 저장
	var uid = document.memberRegForm.uid.value;

	//공백 제거
	uid = uid.trim();

	//아이디 유효성 체크를 위해 RegExp 객체 생성
	var regExp = new RegExp( /^[a-z][a-z0-9_]{6,14}$/ );

	//만약 아이디가 잘못된 문자 패턴이면 경고하고 함수 중단
	if( regExp.test(uid)==false ){
		alert( "[아이디] 입력 규칙에 맞지 않음.\n<1> 영소문자 또는 숫자 또는 언더바(_)로 구성되어야함.\n<2> 글자수는 7~15자 사이 이어야함\n<3> 첫글자가 영문이어야함.\n" ); 


		//<유효성체크> 입력한 아이디 비우고 길이없는문자데이터 붙이기.
        //focus 사용해서 커서 아이디창에 있을 수 있도록 설정해주기.
		document.memberRegForm.uid.value="";
		document.memberRegForm.uid.focus();
		return;
	}
trim( ) : 앞 뒤 공백을 제거하는 제이쿼리 구문. 중간의 공백만 남기고 앞과 뒤의 공백은 모두 제거됨.

1-2. 암호

조건 : 첫글자 영어 소문자 또는 숫자 중 하나

첫번째 문자가 6~14개, 즉, 전체 문자 길이는 7개~15개.

	//사용자가 웹브라우저 화면에서 입력한 [암호값]을 가져와 pwd 변수에 저장
	var pwd = document.memberRegForm.pwd.value;

	//공백 제거
	pwd = pwd.trim();

	//암호 유효성 체크를 위해 RegExp 객체 생성
	var regExp = new RegExp( /^[a-z0-9_]{8,15}$/ );

	//만약 암호가 잘못된 문자 패턴이면 경고하고 함수 중단
	if( regExp.test(pwd)==false ){
		alert( "[암호] 입력 규칙에 맞지 않음.\n<1> 영소문자 또는 숫자로 구성되어야함.\n<2> 글자수는 8~15자 사이 이어야함.\n" ); 


		//<유효성체크> 입력한 아이디 비우고 길이없는문자데이터 붙이기.
        //focus 사용해서 커서 아이디창에 있을 수 있도록 설정해주기.
		document.memberRegForm.pwd.value="";
		document.memberRegForm.pwd.focus();
		return;
	}


    1-3. 암호확인

조건 : 1. 암호 확인창이 빈칸이거나 2. 띄어쓰기로만 이루어져 있을 경우에는 [값 입력]유도

그 외의 경우(암호와 암호확인값이 같지 않을 경우)에는 에러메시지 출력.

	//사용자가 웹브라우저 화면에서 입력한 [암호확인값]을 가져와 pwd_confirm 변수에 저장
	var pwd_confirm = document.memberRegForm.pwd_confirm.value;
       
	if(      pwd_confirm=="" ||  new RegExp(/^[ ]+$/).test(pwd_confirm)        ){
			alert("[암호확인]을 입력해주세요.");
			
            //다시 빈칸으로 지워주기
            document.memberRegForm.pwd_confirm.value="";
			return;
	}
    
	else{
		if(pwd!=pwd_confirm){
			alert("[암호]와 [암호확인] 값이 같지 않습니다!");
			return;
		}
	}

  1-4. 스킬

1개 이상 선택하게 하기. 체크박스를 사용한다.

	//스킬체크 변수 선언
    var skillCnt = 0;
	// i번째 스킬이 체크되어 있으면 변수 skillCnt 에 1 업데이트하기
	for( var i = 0 ; i < document.memberRegForm.skill.length ; i++ ){
		if( document.memberRegForm.skill[i].checked==true ) {
			skillCnt++;
		}
	}
	// skillCnt 가 0 이면(=아무것도 체크되어 있지 않으면) 경고하고 함수중단
	if(skillCnt==0)  { 
		alert("소유 스킬은 1개 이상 선택요망!");
		return;
	}


    1-5. 학력

1개는 무조건 선택하게 하기. 라디오 버튼을 이용한다.

	// 체크한 학력의 개수를 저장하는 변수 선언
	var  schoolCnt = 0;
	// i번째 학력이 체크되어 있으면 변수 schoolCnt 1 업데이트하기
	for( var i = 0 ; i <document.memberRegForm.school.length ; i++ ){
		if( document.memberRegForm.school[i].checked ) {
			schoolCnt++;
			break;
		}
	}
	// schoolCnt 가 0 이면(=아무것도 체크되 있지 않으면) 경고하고 함수중단
	if(schoolCnt==0)  { 
		alert("최종 학력은 1개 선택요망!");
		return;
	}
라디오버튼은 한번 선택하면 선택하지 않았던 상태로 돌아갈 수 없는 점이 특징이다.



1-6. 거주지

목록 작성 후 저장한다. 1개는 무조건 선택한다.

	// 선택한 [거주지]를 변수 addr 에 저장.
	var addr = document.memberRegForm.addr.value; 
	// 선택한 [거주지]가 없으면 경고하고 함수 중단
	if( addr=="" ){
		alert( "거주지 입력요망");
		return;
    }
 

1-7. 생일

가장 복잡하다. 생일은 단순하게 1월~12월, 1일~31일까지만 등록하면 될 것 같지만, 연도의 경우 몇년도까지 나오게 할 것인지, 2월 31일 등의 없는 날짜를 걸러주는 등의 추가 기능이 필요하다.

 

새로운 function이 필요하다.

유효성 체크를 위한 checkForm 함수 밖에 날짜 관련 함수를 선언한다.

//--------------------------------
// 년월일의 미래 날짜 여부 리턴하는 함수 선언하기
//--------------------------------
function is_future(year,month,date) {
	
    var result = false;
	
    var interval = 
		new Date().getTime() 
		- 
		new Date(
			parseInt(year,10)
			,parseInt(month,10)-1
			,parseInt(date,10)
		).getTime();
	
    if( interval<0 ){result = true;}
	
    return result;
}
//--------------------------------
// 생일의 유효성을 체크하는 함수 선언하기
//--------------------------------
function checkBirth(){

	//선택한 [생일]의 년,월,일을 변수 birth_year, birth_month, birth_date에 저장
	var birth_year = document.memberRegForm.birth_year.value; 
	var birth_month = document.memberRegForm.birth_month.value; 
	var birth_date = document.memberRegForm.birth_date.value; 
	
	if( birth_year=="" || birth_month=="" || birth_date==""){
		return;
	}

	if( is_valid_date(birth_year,birth_month,birth_date)==false  ) {
		alert("존재하지 않는 생일입니다. 다시 선택해 주삼!" );
		document.memberRegForm.birth_year.value = "";
		document.memberRegForm.birth_month.value = "";
		document.memberRegForm.birth_date.value = "";
		return;
	}
}
//--------------------------------
// 년월일이 실존 하는지의 여부를 체크하는 함수
//--------------------------------
function is_valid_date(year,month,date) {


	// 매개변수로 들어온 년도,월, 일을 진짜 정수 숫자로 바꾸기
	year = parseInt(year,10);
	month = parseInt(month,10);
	date = parseInt(date,10);

	// 매개변수로 들어온 년,월,일을  가지고 Date 객체 생성하기.
	var dateObj = new Date( year,month-1,date );
			
	// Date 객체에서 년월일을 뽑아내기
	var year2 = dateObj.getFullYear();
	var month2 = dateObj.getMonth()+1;
	var date2 = dateObj.getDate();
			
	// Date 객체에서 뽑아낸 년월일이 매개변수들어온 년,월,일과 같으면 true 리턴하기
	if( year==year2 && month==month2 && date==date2 ){return true;}
	// Date 객체에서 뽑아낸 년월일이 매개변수들어온 년,월,일과 같지 않으면 false 리턴하기
	else{return false;}			


}
checkForm 함수 안에서는 각 변수를 선언하고 빈칸일 경우 입력을 유도하는 경고창을 띄운다.

	// 선택한 생일의 년,월,일을 변수 birth_year,birth_month,birth_date 에 저장.
	var birth_year = document.memberRegForm.birth_year.value; 
	var birth_month = document.memberRegForm.birth_month.value; 
	var birth_date = document.memberRegForm.birth_date.value; 
			
	if( birth_year=="" ){
		alert( "생일 년도 입력요망");
		return;
	}
	if( birth_month=="" ){
		alert( "생일 월 입력요망");
		return;
	}
	if( birth_month=="" ){
		alert( "생일 일 입력요망");
		return;
	}



    1-8. 주민번호

주민번호는 여러 조건이 있다. 입력창이지만 숫자만 입력해야하며, 뒷자리는 나와서는 안되고, 위의 생일처럼 존재하지 않는 날짜는 걸러줘야한다. 또한 미래 날짜라면 경고창을 띄워야 한다.

<조건>

1) 앞자리는 정수 숫자 6개, 뒷자리는 정수 숫자 7개 이어야함.

2) 주민번호에서 출생년도 2자리를 구한 후 19 또는 20을 붙여 온전한 출생년도 찾기.

3) 출생년월일이 존재하지 않는 날짜면 멈추고 경고창을 띄운다.

4) 출생년월일이 아직 오지 않은 미래 날짜면 멈추고 경고창을 띄운다.

 

조건을 하나하나 해결해보자.

 

0)변수선언

	// 입력된 주민번호 얻어와 변수 앞자리는 jumin_num1에 뒷자리는 jumin_num2에 저장
	var jumin_num1 = document.memberRegForm.jumin_num1.value; 
	var jumin_num2 = document.memberRegForm.jumin_num2.value; 
1) 앞자리는 정수 숫자 6개, 뒷자리는 정수 숫자 7개 이어야함.

	// 정수 숫자 6개를 검사하는 RegExp 객체 생성하기
	var regExp1  = new RegExp(/^[0-9]{6}$/);
    
    // 만약 주민번호 앞자리가  6자리 숫자가 아니면 경고하고 주민번호 초기화하고 함수 중단하기
	if( regExp1.test(jumin_num1)==false ){
		alert("주민번호 앞자리는 6자리 숫자이어야 합니다.재 입력바람!");
        //주민번호 초기화
		document.memberRegForm.jumin_num1.value = ""
        //함수 중단
		return;
	}
    
    
	// 정수 숫자 7개를 검사하는 RegExp 객체 생성하기
	var regExp1  = new RegExp(/^[1-4][0-9]{6}$/);
	// 만약 주민번호 뒤자리가 7자리 숫자가 아니면 경고하고 주민번호 초기화하고 함수 중단하기
	if( regExp1.test(jumin_num2)==false ){
		alert("주민번호 뒤자리는 첫 숫자는 1~4이어야하고, 모두 7자리 숫자이어야 합니다. 재입력바람!");
		//주민번호 초기화
        document.memberRegForm.jumin_num2.value = "";
		//함수 중단
        return;
	}
2) 주민번호에서 출생년도 2자리를 구한 후 19 또는 20을 붙여 온전한 출생년도 찾기.

	// 주민번호에서 출생년도,월,일 2자리씩 구하기
	var jumin_year = jumin_num1.substr(0,2);
	var jumin_month = jumin_num1.substr(2,2);
	var jumin_date = jumin_num1.substr(4,2);
    
    
	// 주민번호에서 출생년도 19 또는 20 구해서 출생년도 앞에 붙이기
	var first_num = jumin_num2.substr(0,1);
    
    //만약 주민번호 뒷자리 첫째자리(first_num)이 1또는 2라면 19, 3 또는 4라면 20을 붙여라.
	if( first_num=="1" || first_num=="2"  ){
		jumin_year = "19" + jumin_year;
	}
	if( first_num=="3" || first_num=="4"  ){
		jumin_year = "20" + jumin_year;
	}
3) 출생년월일이 존재하지 않는 날짜면 멈추고 경고창을 띄운다.

	// 출생년월일이 존재하지 않는 날짜면 경고하고 함수 중단하기
	if( is_valid_date(jumin_year,jumin_month,jumin_date)==false ){
		alert("주민번호 앞자리는 존재하지 않는 년월일 입니다.");
		document.memberRegForm.jumin_num1.value = ""
		document.memberRegForm.jumin_num2.value = ""
		return;
	}
4) 출생년월일이 아직 오지 않은 미래 날짜면 멈추고 경고창을 띄운다.

	//출생년월일이 미래 날짜면 경고하고 함수 중단하기
	if( is_future(jumin_year,jumin_month,jumin_date)  ){
		alert("주민번호 출생년월일이 미래 입니다.");
		document.memberRegForm.jumin_num1.value = ""
		document.memberRegForm.jumin_num2.value = ""
		return;
	}
1-9. 파일 선택

파일도 무조건 선택하게 한다.

	//파일 선택 안하면 경고창
    if(  document.memberRegForm.pic.value=="" ) {
		alert("파일 선택은 필수입니다!");
		return;
	}
1-10. 숙지사항 체크하기

체크가 false이면 경고창이 뜨게 한다.

	if(  document.memberRegForm.is_confirm.checked==false ) {
		alert("숙지사항은 필수 체크입니다!");
		return;
	}
 

여기까지 스크립트는 끝. 바디로 넘어가자.

}

	</script>
</head>
 

2. <body> 태그 안에서 <form> 태그로 UI를 만든다. 테이블 형태로 깔끔하게 한다.

<body>
<form name="memberRegForm">

//테이블 만들기
	<table border=1 cellpadding=7 cellspacing=0>
		<tr>
			<th>아이디 <--!텍스트-->
			<td> <input type="text" name="uid" size=8>
		</tr>
		<tr>
			<th>암호 <!--암호-->
			<td><input type="password" name="pwd" size=8 >
		</tr>
		<tr>
			<th>암호확인 <!--암호-->
			<td><input type="password" name="pwd_confirm" size=8 >
		</tr>
		<tr>
			<th>소유스킬 <!--체크박스->
			<td>
				<input type="checkbox" name="skill" value="Java">Java
				<input type="checkbox" name="skill" value="JSP">JSP
				<input type="checkbox" name="skill" value="Spring">Spring
				<input type="checkbox" name="skill" value="Oracle">Oracle
				<input type="checkbox" name="skill" value="mybatis">mybatis
		</tr>
		<tr>
			<th>최종학력  <!--라디오버튼-->
			<td>
				<input type="radio" name="school" value="고졸">고졸
				<input type="radio" name="school" value="전문대졸">전문대졸
				<input type="radio" name="school" value="일반대졸">일반대졸
		</tr>
		<tr>
			<th>거주지역 <!--select 박스-->
			<td>
				<select name="addr">
					<option value="">-선택-
					<option value="서울">서울
					<option value="경기">경기
					<option value="인천">인천
					<option value="전라도">전라도
					<option value="경상도">경상도
					<option value="강원도">강원도
					<option value="충청도">충청도
					<option value="제주도">제주도
					<option value="기타">기타
				</select>
		</tr>
		<tr>
			<th>생일  <!--select 박스-->
			<td>
				<select name="birth_year" onChange="checkBirth();">
					<option value="">
					<script>
						for( var i=2000 ; i<=2020  ; i++ ){
							document.write( "<option value="+i+">"+i );
						}
					</script>
				</select>년
				<select name="birth_month" onChange="checkBirth();">
					<option value="">
					<script>
						for( var i=1 ; i<=12; i++ ){
							if( i<10 )
								document.write( "<option value=0"+i+">0"+i );
							else
								document.write( "<option value="+i+">"+i );
						}
					</script>
				</select>월
				<select name="birth_date" onChange="checkBirth();">
					<option value="">
					<script>
						for( var i=1 ; i<=31; i++ ){
							if( i<10 )
								document.write( "<option value=0"+i+">0"+i );
							else
								document.write( "<option value="+i+">"+i );
						}
					</script>
				</select>일
		</tr>
		<tr>
			<th>주민번호 <!--텍스트-->
			<td>
				<input type="text" name="jumin_num1" maxlength=6 > -
				<input type="password" name="jumin_num2" maxlength=7>
		</tr>
		<tr>
			<th>사진 <!--파일-->
			<td>
				<input type="file" name="pic">
		</tr>
		<tr>
			<th>숙지사항 <!--체크박스-->
			<td>
				입력하신 개인 정보는 회사 소유 입니다.
				<input type="checkbox" name="is_confirm" value="확인">확인
		</tr>


	</table>
</form>

	<!--저장버튼을 만든다. 저장버튼을 누르면 checkForm() 함수가 시행된다.-->
	<input type="button" value="저장" onClick="checkForm()">

</body>
</html>