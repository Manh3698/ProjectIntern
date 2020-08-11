$(document).ready(function () {
    $("#owl-similar-post").owlCarousel({
        loop: true,
        autoplay: true,
        navigation: true,
        slideSpeed: 400,
        paginationSpeed: 400,
        items: 1,
        nav: true,
        navText: ["<i class='fa fa-angle-left fa-3x'></i>", "<i class='fa fa-angle-right fa-3x'></i>"],
    });
});