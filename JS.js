
var draw; //�O�_�bø�Ϫ��A
var m, c; //ø�Ϫ���
var $canvas = $('#m');
var $tools = $(".tool");
$tools.draggable({
    helper: 'clone',
});
$tools.each(function (index, element) {
    $(this).data("toolsIndex", index);
});


$canvas.droppable({
    drop: dragDrop,
});
function dragDrop(e, ui) {

    // get the drop point (be sure to adjust for border)
    x = parseInt(ui.offset.left - offsetX) - 1;
    y = parseInt(ui.offset.top - offsetY);
    width = ui.helper[0].width;
    height = ui.helper[0].height;

    // get the drop payload (here the payload is the $tools index)
    var theIndex = ui.draggable.data("toolsIndex");

    // drawImage at the drop point using the dropped image 
    // This will make the img a permanent part of the canvas content
    ctx.drawImage($tools[theIndex], x, y, width, height);

}


function init() {
    m = document.getElementById("m"); //���o�e������Ѧ�
    c = m.getContext("2d"); //�إ�2dø�Ϫ���
    Radio5.checked = "checked";
}
function md() {
    c.moveTo(event.offsetX, event.offsetY); //�_�I
    draw = true; //�i�Jø�ϼҦ�
    c.beginPath(); //����ø�ϵ��e�}�l
}
function mv() {
    if (draw) {
        c.lineTo(event.offsetX, event.offsetY); //�U�@�I
        c.stroke(); //ø��
    }
}
function mup() {
    draw = false; //���}ø�ϼҦ�
    c.closePath(); //ø�ϵ��e����
}
function Radio1_onclick() { c.strokeStyle = "rgb(255,0,0)"; }
function Radio2_onclick() { c.strokeStyle = "rgb(0,255,0)"; }
function Radio3_onclick() { c.strokeStyle = "rgb(0,0,255)"; }
function Radio4_onclick() { c.strokeStyle = "rgb(0,0,0)"; }
function Radio5_onclick() { c.lineWidth = 1; }
function Radio6_onclick() { c.lineWidth = 2; }
function Radio7_onclick() { c.lineWidth = 3; }
function Radio8_onclick() { c.lineWidth = 5; }
function Radio9_onclick() { c.lineWidth = 10; }
function Button1_onclick() { location.reload(); }

document.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("Text", event.target.id);
});

/* ��ʧ�����Ĳ�o*/
/*
document.addEventListener("dragover", function (event) {
    event.preventDefault();
});
document.addEventListener("drop", function (event) {
    event.preventDefault();
    if (event.target.className == "droptarget") {
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    }
});
$(document).ready(function () {
    $("a").hover(function () {
        $("p").hide();
    }, function () {
        $("p").show();
    });
});

*/

function change1() {
    var c = document.getElementById("m");
    var ctx = c.getContext("2d");
    var img1 = document.getElementById("img1");
    ctx.drawImage(img1, 10, 10);
}
function change2() {
    var c = document.getElementById("m");
    var ctx = c.getContext("2d");
    var img2 = document.getElementById("img2");
    ctx.drawImage(img2, 10, 10);
}
function change3() {
    var c = document.getElementById("m");
    var ctx = c.getContext("2d");
    var img3 = document.getElementById("img3");
    ctx.drawImage(img3, 10, 10);
}
function change4() {
    var c = document.getElementById("m");
    var ctx = c.getContext("2d");
    var img4 = document.getElementById("img4");
    ctx.drawImage(img4, 10, 10);
}
function change5() {
    var c = document.getElementById("m");
    var ctx = c.getContext("2d");
    var img3 = document.getElementById("img5");
    ctx.drawImage(img5, 10, 10);
}
function change6() {
    var c = document.getElementById("m");
    var ctx = c.getContext("2d");
    var img6 = document.getElementById("img6");
    ctx.drawImage(img6, 10, 10);
}
function change7() {
    var c = document.getElementById("m");
    var ctx = c.getContext("2d");
    var img7 = document.getElementById("img7");
    ctx.drawImage(img7, 10, 10);
}
function change8() {
    var c = document.getElementById("m");
    var ctx = c.getContext("2d");
    var img8 = document.getElementById("img8");
    ctx.drawImage(img8, 10, 10);
}
function change9() {
    var c = document.getElementById("m");
    var ctx = c.getContext("2d");
    var img9 = document.getElementById("img9");
    ctx.drawImage(img9, 10, 10);
}
function change10() {
    var c = document.getElementById("m");
    var ctx = c.getContext("2d");
    var img10 = document.getElementById("img10");
    ctx.drawImage(img10, 10, 10);
}
function createtxt() {
    var c = document.getElementById("m");
    var ctx = c.getContext("2d");
    var txtNewInputBox = document.createElement('div');
    txtNewInputBox.innerHTML = "<input type='text' id='newInputBox'>";
    var input = new CanvasInput({ canvas: document.getElementById("m") });
}

function displayelement() {
    var image1 = document.getElementById("img1");
    image1.src = "https://i.imgur.com/LTvUEfi.png";
    var image2 = document.getElementById("img2");
    image2.src = "https://i.imgur.com/Z38gXxq.png";
    var image3 = document.getElementById("img3");
    image3.src = "https://i.imgur.com/PQCiA6b.png";
    var image4 = document.getElementById("img4");
    image4.src = "https://i.imgur.com/zC0PWQ0.png";
    var image5 = document.getElementById("img5");
    image5.src = "https://i.imgur.com/oIuoMUY.png";
    var image6 = document.getElementById("img6");
    image6.src = "https://i.imgur.com/BUrLAMc.png";
    var image7 = document.getElementById("img7");
    image7.src = "https://i.imgur.com/YHyUArl.png";
    var image8 = document.getElementById("img8");
    image8.src = "https://i.imgur.com/tpuH3HK.png";
    var image9 = document.getElementById("img9");
    image9.src = "https://i.imgur.com/QtiP2fC.png";
    var image10 = document.getElementById("img10");
    image10.src = "https://i.imgur.com/HM60tcC.png";

}
/*
function createtxt() {
    // First create a DIV element.
    var txtNewInputBox = document.createElement('div');

    // Then add the content (a new input box) of the element.
    txtNewInputBox.innerHTML = "<input type='text' id='newInputBox'>";

    // Finally put it where it is supposed to appear.
    document.getElementById("photo").appendChild(txtNewInputBox);
}
document.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("Text", event.target.id);
});

document.addEventListener("dragover", function (event) {
    event.preventDefault();
});
document.addEventListener("drop", function (event) {
    event.preventDefault();
    if (event.target.className == "droptarget") {
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    }
});
$(document).ready(function () {
    $(function () { $('#divContainer').draggable(); });
    $('btClickMe').click(function () {

        var dynamic_div = $(document.createElement('div')).css({
            border: '1px dashed', position: 'absolute', left: element_pos,
            top: $('#divContainer').height() + 20,
            width: '120', height: '120', padding: '3', margin: '0'
        });

        element_pos = element_pos + $('#divContainer').width() + 20;

        $(dynamic_div).append('You can drag me too');

        // APPEND THE NEWLY CREATED DIV TO "divContainer".
        $(dynamic_div).appendTo('#divContainer').draggable();

        iCnt = iCnt + 1;
    });
});
*/