# CSS 적용방법
1. 인라인 작성 방식
2. 내부에 작성 방식
3. 외부에 작성 방식 
--------------------------------------------------
예시
1. <p style="color: rebeccapurple ">코리아아카데미it</p>
2.    <style>
     p{
        color: red; 
        background-color: aqua;
        
    }
    </style>

------------------------------------------------------
HTML 안에 STYLE 작성법
<style>{
속성값: 값;
속성값: 값;
속성값: 값;
}</style>

# 전체 선택자 
*{
    color : red;    
}
# 태그 선택자
p{

}
# 클래스 선택자 
<p class="accent">내용3</p>
.클래스명{

}

# id 선택자 
<p id="accent2">내용4</p>
#클래스명{
    
}

--------------------------------------------------------------
# <div> </div> 
하위 선택자 작성 법 

# 따로 하기 
 <style>
        div p{
            color: red;
        }

        div h1{
            background-color: aqua;
            color: white;
        }

    </style>
<body>
    <div>
        <p>내용1</p>
        <h1>내용2</h1>
    </div>
</body>

# 합쳐서 하기 
<style>
        div p, div h1{
            color: red;
        }
</style>

# 자식 선택자 
        div > p, h1{
            color: red;
        }

# 인접 선택자 
 # 첫번째 동생
 <style>
        h1 + p {
            color: pink;
        }

      

    </style>

</head>

<body>
    <div>
        
        <h1>내용2</h1>
        <p>내용3</p>
        <p>내용4</p>
    </div>
</body>

 # 동생들
  <style>
     
      h1 ~ p {
        color: aqua;
      }

    </style>

    </head>

<body>
    <div>
        
        <h1>내용2</h1>
        <p>내용3</p>
        <p>내용4</p>
    </div>
</body>
------------------------------------------------------

# 선택 가능 메뉴 제외 색상 주기
 <style>
     a[href]{
        color: aqua;
     }
  
    </style>

</head>

<body>
    <ul>
        <li><a>선택 가능 메뉴</a></li>
        <li><a href="#">메뉴1</a></li>
        <li><a href="#">메뉴2</a></li>
        <li><a href="#">메뉴3</a></li>
    </ul>
</body>

# target 만 색상 변경
 <style>
     a[href]{
        color: aqua;

     }
     a[target="_blank"]{
        color: red;
     }
  
    </style>

</head>

<body>
    <ul>
        <li><a>선택 가능 메뉴</a></li>
        <li><a href="#">메뉴1</a></li>
        <li><a href="#">메뉴2</a></li>
        <li><a href="#">메뉴3</a></li>
        <li><a href="#" target="_blank">메뉴3</a></li>
    </ul>
</body>

# 가상클래스와 가상요소
a:link{}

a:hover{
    text-decoration :
}
a:active{
    color :
}
a:vistied{
    color :
}