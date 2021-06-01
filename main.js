$(".nav-button").on('click', function(){
    $(".nav-button").toggleClass('close');
    $('.nav').toggleClass('reveal').toggleClass('overlay');
})