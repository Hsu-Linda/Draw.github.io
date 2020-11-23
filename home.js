/*$(document).ready(function () {
    $("p").hover(function () {
        $(this).addClass("animated bounce");
        });
    }, function () {
            // out
        }
    );
  */
 $(document).ready(function(){
    $("p").hover(function(){
      $(this).css("background-color", "yellow");
      }, function(){
      $(this).css("background-color", "pink");
    });
  }); 