$(".hamburger").click(function (e) {
    e.preventDefault();
    $(".navbar").toggleClass("active");
});

$(document).ready(function ($) {
    function mediaSize() {
        if (window.matchMedia('(max-width: 991px)').matches) {
            $('.hamburger').click(function () {
                $('.ul-sidebar').slideToggle('slow');
            });
            $('.close-it').click(function () {
                $('.ul-sidebar').slideUp("slow");
            });
        }
    };
    /* Call the function */
    mediaSize();
    /* Attach the function to the resize event listener */
    window.addEventListener('resize', mediaSize, false);

})

$(".hamburger").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});