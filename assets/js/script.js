/*
===============
    Toogler
===============
*/

$(function(){
    $('button.navbar-toggler').on('click',function(){
        $(this).addClass('animated shake').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd mozAnimationEnd',function(){
            $(this).removeClass('animated shake');
        });
    });
});