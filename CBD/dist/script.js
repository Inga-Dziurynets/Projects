$(".tab_item").not(":first").hide();
    $(".about-us__tabs .about-us__tab").click(function () {
    $(".about-us__tabs .about-us__tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn(1);
}).eq(0).addClass("active");



$(document).ready(function(){
    $('.question').click(function(){
        $(this).next('.answer').slideToggle();
    });
    
});
   
const questionIcon = document.querySelectorAll(".question");
    questionIcon.forEach(questionIcon=>{
    questionIcon.addEventListener("click", event=>{
        questionIcon.classList.toggle("active");
    });
});
  
$('.products__slick').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<img class="slick-prev" src="images/Left.png" alt="">',
    nextArrow: '<img class="slick-next" src="images/Right.png" alt="">',
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 865,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
            }
        },
        ]
    });

$('.review__slider').slick({
infinite: true,
dots: false,
slidesToShow: 1,
slidesToScroll: 1,
fade: true,
cssEase: 'linear',
speed: 500,
});
            

var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});

$(window).on("scroll", function() {
$('.header__nav').toggleClass("active", $(this).scrollTop() > $(window).height());
});


      