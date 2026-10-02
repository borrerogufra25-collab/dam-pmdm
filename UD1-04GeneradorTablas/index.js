$(document).ready(function () {
  // Crear fila
  $("#btnAgregarFila").click(function () {
    $("#tabla tbody").append(
      "<tr>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td>" +
        "<button class='btn btn-danger btnEliminarFila'>Eliminar</button>" +
        "</td>" +
        "</tr>",
    );
  });

  // Borrar fila
  $(document).on("click", ".btnEliminarFila", function () {
    $(this).closest("tr").remove();
  });

  // Crear columna
  $("#btnAgregarColumna").click(function () {
    $("#tabla thead tr").append("<th>Nueva</th>");

    $("#tabla tbody tr").each(function () {
      $(this).append("<td>Nueva</td>");
    });
  });

  // Borrar columna pulsando sobre la cabecera
  $(document).on("click", "#tabla th", function () {
    let posicion = $(this).index();

    $(this).remove();

    $("#tabla tbody tr").each(function () {
      $(this).find("td").eq(posicion).remove();
    });
  });

  // Eliminar tabla completa
  $("#btnEliminarTabla").click(function () {
    $("#tabla").remove();
  });
});
