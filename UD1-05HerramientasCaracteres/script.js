$(document).ready(function () {
  $("#texto").on("input", function () {
    let texto = $(this).val();

    let caracteres = texto.length;

    let sinEspacios = texto.replace(/\s/g, "").length;

    let palabras = 0;

    if (texto.trim() !== "") {
      palabras = texto.trim().split(/\s+/).length;
    }

    let parrafos = 0;

    if (texto.trim() !== "") {
      parrafos = texto.trim().split(/\n\s*\n/).length;
    }

    $("#caracteres").text(caracteres);

    $("#palabras").text(palabras);

    $("#sinEspacios").text(sinEspacios);

    $("#parrafos").text(parrafos);
  });
});
