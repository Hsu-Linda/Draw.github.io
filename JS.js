$(document).ready(function(){
    $("a").hover(function(){
        $("p").hide();
    }, function(){
    $("p").show();
    });
});
        
        
        


function showImage(){
    var image =new Image();
    image.src="https://i.ibb.co/6Pnr8K9/black.png"
    image.draggable=true
    document.getElementById("show").appendChild(image)

}
    

var stage = new Konva.Stage({
    container:"container",
    width:window.innerWidth,
    heigh:window.innerHeight
});

var layer = new Konva.Layer();
layer.add(image)
stage.add(layer)


var stage = new Konva.Stage({
    container: 'container', //容器id
    width: window.innerWidth,// canvas宽度
    height: window.innerHeight// canvas高度
  });
  
  var layer = new Konva.Layer();
  stage.add(layer);





