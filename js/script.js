window.onload = function () {
    function menu() {
        document.querySelector('.body').classList.toggle('menu-opened');
    }

    let arr = document.querySelectorAll('.menu-toggle');
    for (const value of arr) {
        value.addEventListener('click', menu);
    }

};
$('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
    let target = $(this).attr("href"),
       bl_top = $(target).offset().top - 50;
    $('body,html').animate({scrollTop: bl_top}, 700);
    return false;
});

$('#slider').slick({
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: "<img src='images/prev.png' class='prev' alt='1'>",
    nextArrow: "<img src='images/prev.png' class='next' alt='2'>",
    autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 710,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
});
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 550) {
            $('.body').addClass('active');
        } else {
            $('.body').removeClass('active');
        }
    })
    $('#to-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
});