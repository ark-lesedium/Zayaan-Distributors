(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Initiate the wowjs
    new WOW().init();


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // Service-carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: false,
        navText: [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // WhatsApp quote form on contact page
    $('#whatsappQuoteForm').on('submit', function (event) {
        event.preventDefault();

        var name = ($('#name').val() || '').trim();
        var email = ($('#email').val() || '').trim();
        var phone = ($('#phone').val() || '').trim();
        var project = ($('#project').val() || '').trim();
        var serviceRequired = ($('#serviceRequired').val() || '').trim();
        var message = ($('#message').val() || '').trim();

        var whatsappNumber = '27797860004';
        var quoteMessage = [
            'Hello Zayaan Distributors, I would like a quote.',
            '',
            'Name: ' + (name || 'Not provided'),
            'Phone: ' + (phone || 'Not provided'),
            'Email: ' + (email || 'Not provided'),
            'Project / Site Location: ' + (project || 'Not provided'),
            'Service Required: ' + (serviceRequired || 'Not selected'),
            'Additional Details: ' + (message || 'No additional details provided')
        ].join('\n');

        var whatsappUrl = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(quoteMessage);
        window.open(whatsappUrl, '_blank');
    });


})(jQuery);

