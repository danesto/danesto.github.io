$(document).ready(function () {

    $("#skroler").hide();
    $(window).scroll(function () {
        let skrolovano = $(this).scrollTop();
        if (skrolovano > 100) {
            $("#skroler").fadeIn();
        } else {
            $("#skroler").fadeOut();
        }
    });

    $("#skroler").click(function () {
        $('html').animate({
            scrollTop: "0",

        }, 1000);


    })



});