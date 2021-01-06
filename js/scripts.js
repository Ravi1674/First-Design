<!-- Carousel play pause jQuery -->
$(document).ready(function(){
    $("#mycarousel").carousel( {interval: 2000} );
    $("#carouselButton").click(function(){
          if($("#carouselButton").children("span").hasClass("fa-pause")){
               $("#mycarousel").carousel('pause');
               $("#carouselButton").children("span").removeClass("fa-pause");
               $("#carouselButton").children("span").addClass("fa-play");
          }
          else if($("#carouselButton").children("span").hasClass("fa-play")){
               $("#mycarousel").carousel('cycle');
               $("#carouselButton").children("span").removeClass("fa-play");
               $("#carouselButton").children("span").addClass("fa-pause");
          }
    });
});

<!-- login modal jQuery -->
$('#login').click(function(){
   $('#loginmodal').modal('toggle');
});
$('.closelogin').click(function(){
   $('#loginmodal').modal('hide');
});

<!-- Reserve table modal jQuery -->
$('#table').click(function(){
    $('#tablemodal').modal('toggle');
});
$('.closetable').click(function(){
    $('#tablemodal').modal('hide');
});
