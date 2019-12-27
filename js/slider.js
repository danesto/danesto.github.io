$(document).ready(() => {
  $("#slider > div:gt(0)").hide();

  setInterval(() => {
    $("#slider> div:first")
      .fadeOut(500)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slider");
  }, 2000);
});