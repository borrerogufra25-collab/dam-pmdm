$(document).ready(function () {
  $("#lista-alumnos").append("<li>María</li>");
  $("#lista-alumnos").append("<li>Pedro</li>");

  $("li").on("click", function () {
    $(this).remove();
  });
});
