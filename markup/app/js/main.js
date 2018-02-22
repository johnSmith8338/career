$(document).ready(function () {
    anchorLinks();
    mobileMenu();
    modalWindow();
    initMap();
});

// Navigation anchor links
function anchorLinks() {
    $(".nav-list a").on("click", function (e) {
        var anchor = $(this);
        $(".nav-list li").removeClass('active');
        anchor.parent().addClass('active');
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
    });
}

// Hidden menu on click
function mobileMenu() {
    $(".hidden-menu").click(function () {
        $(".nav-list").toggleClass('nav-list-active');
    });
}

// modal
function modalWindow() {
    $('button#go').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal-form')
                    .css('display', 'block')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    $('#modal-close, #overlay').click(function () {
        $('#modal-form')
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
}

// slider
$(".banner-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    draggable: false,
    prevArrow: '<div class="prev-arrow"><div class="icon-left-arrow"></div></div>',
    nextArrow: '<div class="next-arrow"><div class="icon-right-arrow"></div></div>'
});

// map
function initMap() {
    var coordinates = {
            lat: 54.210650,
            lng: 36.616129
        },
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 11,
            disableDefaultUI: Boolean
        }),

        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            animation: google.maps.Animation.BOUNCE
        });
}
