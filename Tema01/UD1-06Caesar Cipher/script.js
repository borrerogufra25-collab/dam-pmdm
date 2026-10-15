$(document).ready(function () {
  $("#textoNormal").on("input", function () {
    let textoNormal = $(this).val();

    let textoCifrado = $(textoNormal).replace(/[a-z]/gi, function (i) {
      return (results += String.fromCharCode(i.charCodeAt() + 1));
    });

    $("#textoCifradoNuevo");
  });
});
