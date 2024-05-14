<script>
    function car() {
        let basic_car = Number(document.getElementById("total").defaultValue);

        for(let i = 1; i <= 3; i++) { // opt1~3 
            let chkObj = document.getElementById("opt" + i);   
            if(chkObj.checked){
                basic_car += Number(chkObj.value);
            }
        }

        // 색상 선택에 따라 추가 가격 설정
        let colorOptions = document.getElementsByName("color");
        for(let i = 0; i < colorOptions.length; i++) {
            if(colorOptions[i].checked) {
                basic_car += Number(colorOptions[i].value);
                break;
            }
        }

        document.getElementById("total").value = basic_car;
    }

    function changeImage(color) {
        let mainImage = document.getElementById("mainImage");

        let imagePath;
        if (color === 'red') {
            imagePath = './car1.jpeg';
        } else if (color === 'blue') {
            imagePath = './car2.jpeg';
        } else if (color === 'green') {
            imagePath = './car3.jpeg';
        }

        mainImage.src = imagePath;
    }
</script>
