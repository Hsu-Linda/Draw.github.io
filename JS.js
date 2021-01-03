src="https://unpkg.com/konva@7.2.2/konva.min.js"
$(document).ready(function(){
    $("a").hover(function(){
        $("p").hide();
    }, function(){
    $("p").show();
    });
});
        
        
        
cache=""
function addphoto(){    
    cache+="<img src='https://i.ibb.co/6Pnr8K9/black.png' draggable='true'>"; 
    var photo=cache;
}
    

var stage = new Konva.Layoer({
    container:"container",
    width:window.innerWidth,
    heigh:window.innerHeight
});

var layer = new Konva.Layer();
layer.add(photo)
stage.add(layer)





