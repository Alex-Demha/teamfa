$(".nav-button").on('click', function(){
    $(".nav-button").toggleClass('close');
    $('.nav').toggleClass('reveal').toggleClass('overlay');
})

$('.password-visibility-label').on('click', function(){
    if($('.fas').hasClass('fa-eye'))
    {
        $('.fa-eye').removeClass('fa-eye').addClass('fa-eye-slash')
        $('#password').get(0).type = 'password';
}

    else if($('.fas').hasClass('fa-eye-slash'))
    {
        $('.fa-eye-slash').removeClass('fa-eye-slash').addClass('fa-eye');
        $('#password').get(0).type = 'text';
    }
})