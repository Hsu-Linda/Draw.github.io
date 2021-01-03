document.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("Text", event.target.id);
});

/* ��ʧ�����Ĳ�o*/
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



x = 1
cache = ""
function change() {
    cache += "<img src='https://i.ibb.co/6Pnr8K9/black.png' draggable='true' id='picture_1_${x}'>";
    x++
    document.getElementById("photo").innerHTML = cache;
}
function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
    var cleardot = document.getElementById('picture_1_${x}');
    cleardot.remove();
    x = 0;
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

/* ��ʧ�����Ĳ�o*/
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

