
window.onload=function () {
    alert(2 + 4);
}


var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#F2FEFF"]; // создаем массив с цветами фона
var i = 0;

function changeColor() {
    // document.body.style.background = colorArray[i];
    document.getElementById("move_block").style.background = colorArray[i];
    i++;
    if (i > colorArray.length - 1) {
        i = 0;
    }
}
