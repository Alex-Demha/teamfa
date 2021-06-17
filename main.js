$(".nav-button").on('click', function () {
    $(".nav-button").toggleClass('close');
    $('.nav').toggleClass('reveal').toggleClass('overlay');
});

$('.password-visibility-label').on('click', function () {
    if ($('.fas').hasClass('fa-eye')) {
        $('.fa-eye').removeClass('fa-eye').addClass('fa-eye-slash')
        $('#password').get(0).type = 'password';
    }

    else if ($('.fas').hasClass('fa-eye-slash')) {
        $('.fa-eye-slash').removeClass('fa-eye-slash').addClass('fa-eye');
        $('#password').get(0).type = 'text';
    }
})

function cartAdd(itemName,itemPrice){
    $('.cart-list').append('<li class="cart-item"> <img src="https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-800x800.jpg" class="cart-item-image"> <p class="cart-item-name">'+itemName+'</p>   <p class="cart-item-price">$'+ itemPrice +'</p> </li>');
   
}

cartAdd('Shirt', 22.99);
cartAdd('Pants', 29.99);
