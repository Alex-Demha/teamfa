$(".nav-button").on('click', function () {
    $(".nav-button").toggleClass('close');
    $('.nav').toggleClass('reveal').toggleClass('overlay');
});

$('.password-visibility-label').on('click', function () {
    if ($('.fas').hasClass('fa-eye')) {
        $('.fa-eye').removeClass('fa-eye').addClass('fa-eye-slash')
        $('#password').get(0).type = 'password';
    } else if ($('.fas').hasClass('fa-eye-slash')) {
        $('.fa-eye-slash').removeClass('fa-eye-slash').addClass('fa-eye');
        $('#password').get(0).type = 'text';
    }
})

// function cartAdd(itemName,itemPrice){
//     $('.cart-list').append('<li class="cart-item"> <img src="https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-800x800.jpg" class="cart-item-image"> <p class="cart-item-name">'+itemName+'</p>   <p class="cart-item-price">$'+ itemPrice +'</p> </li>');

// }

// cartAdd('Shirt', 22.99);
// cartAdd('Pants', 29.99);


function calTotal(){
    var $sum =0;
$('.cart-item-price').each(function(){
    var $priceString = $(this).text();
    var $price = parseFloat($priceString);
    console.log('this is price: ' + $price)

    $sum+=$price;
    console.log($sum);
    $('.total').html($sum.toFixed(2))
})
}

calTotal();


$('.add').on('click', function () {
    var $countNumString = $(this).next($('.count-num')).text();
    var $countNum = parseInt($countNumString);
    console.log($countNum + 1);
    $(this).next($('.count-num')).html($countNum + 1);


    var $currentPriceString = $(this).parent().parent().next().children('.cart-item-price').text();
    const $currentPrice = parseFloat($currentPriceString);
    $(this).parent().parent().next().children('.cart-item-price').text(($currentPrice * ($countNum + 1) / $countNum).toFixed(2));

    calTotal();
});

$('.sub').on('click', function () {
    var $countNumString = $(this).prev($('.count-num')).text();
    var $countNum = parseInt($countNumString);
    console.log($countNum)
    if ($countNum > 1) {
        console.log($countNum - 1);
        $(this).prev($('.count-num')).html($countNum - 1);

        var $currentPriceString = $(this).parent().parent().next().children('.cart-item-price').text();
        const $currentPrice = parseFloat($currentPriceString);
        $(this).parent().parent().next().children('.cart-item-price').text(($currentPrice / $countNum * ($countNum -1)).toFixed(2));

        calTotal();
    }

    else{}

});


// $('.sub').on('click', function(){

//     var $countNumString = $('.count-num').text();
//     var $countNum = parseInt($countNumString);
//     if( $countNum > 1)
//     {
//     console.log($countNum - 1);
//     $('.count-num').html($countNum - 1);
//     $currentPrice = $currentPrice - $itemPrice;
//     $('.cart-item-price').html($currentPrice.toFixed(2));
//     console.log($currentPrice)
//     }

//     else {}
// });