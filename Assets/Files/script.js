$(document).ready(function(){
    $('.next').click(function(){
        $('.carousel-container').animate({marginLeft:'-=300px'},500, function(){
            $('.carousel-container').append($('.carousel-item:first-child'));
            $('.carousel-container').css('margin-left', '0');
        });
    });
    $('.prev').click(function(){
        $('.carousel-container').prepand($('.carousel-item:last-child'));
        $('.carousel-container').css('margin-left', '-300px');
        $('.carousel-container').animate({marginLeft:'+=300px'},500);
    });
});