$(document).ready(function () {

    $("#kolar").hide();
    $("#kolareklama").hover(function () {
        $("#kolar").slideToggle();
    });
    $("#cenar").hide();
    $("#cena").hover(function () {
        $("#cenar").slideToggle();
    });
    $("#ruker").hide();
    $("#ruke").hover(function () {
        $("#ruker").slideToggle();
    });

    $("#zastavar").hide();
    $("#zastava").hover(function () {
        $("#zastavar").slideToggle();
    });

    $("#osobljer").hide();

    $("#osoblje").hover(function () {
        $("#osobljer").slideToggle();
    });

    $("#raspolaganjer").hide();
    $("#raspolaganje").hover(function () {
        $("#raspolaganjer").slideToggle();
    });
    $(".krug").hover(function () {


        $(this).animate({
            fontSize: "+=10px",
        });
        $(this).css("color", "#2b7a78");

    }, function () {
        $(this).animate({
            fontSize: "-=10px"
        });
        $(this).css("color", "#feffff");
    })
});