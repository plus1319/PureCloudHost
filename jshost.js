$(document).ready(function(){

    $(window).scroll(function(event){
        var y=$(this).scrollTop();
        if(y>=300)
        {
            $("#monitor").addClass("animate");
            $("#phone").addClass("animate");
        }
        if(y>=600){
            $(".section").addClass("animate");
        }
    });

});