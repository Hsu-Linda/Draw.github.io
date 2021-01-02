
            $(document).ready(function(){
            $("a").hover(function(){
                $("p").hide();
            }, function(){
                $("p").show();
            });
            });
        
        
        
            x=1
            cache=""
            function change(){
              cache+="<img src='https://i.ibb.co/6Pnr8K9/black.png' draggable='true' id='picture_1_${x}'>"; 
              x++
              document.getElementById("photo").innerHTML=cache;
            }
    


    document.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("Text", event.target.id);
        
    });
    document.addEventListener("dragend", function(event) {
        
    });
    /* 拖動完成後觸發*/
    document.addEventListener("dragover", function(event) {
        event.preventDefault();
    });
    document.addEventListener("drop", function(event) {
        event.preventDefault();
        if ( event.target.className == "droptarget" ) {
            var data = event.dataTransfer.getData("Text");
            event.target.appendChild(document.getElementById(data));
        }
    });
