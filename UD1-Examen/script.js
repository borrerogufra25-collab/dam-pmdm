$(document).ready(function () {
  var nextNota = 1;

  $("#guardar-nota").attr("data-bs-dismiss", "modal");

  $(document).on("click", "#agregarNota", function () {
    $("#nota-modal").find("#nota-titulo").val("");
    $("#nota-modal").find("#nota-tam").val("col-4");
    $("#nota-modal").find("#nota-color").val("danger");
  });

  $(document).on("click", "#guardar-nota", function () {
    var titulo = $("#nota-modal").find("#nota-titulo").val();
    var tam = $("#nota-modal").find("#nota-tam").val();
    var color = $("#nota-modal").find("#nota-color").val();

    var notaId = "nota-" + nextNota;
    var notaLabel = "Nota " + nextNota;
    var deleteNotaId = "delete-nota-" + nextNota;

    var nuevaNota = `
      <div class="${tam} nota-column">
        <div id="${notaId}" class="card nota-card h-100">

          <div class="card-header bg-${color}">
            <div class="d-flex justify-content-between align-items-center gap-2">
              <span>${notaLabel}</span>
              <div class="d-flex gap-1">
              
                <button id="${deleteNotaId}" type="button" class="btn btn-sm btn-light delete-nota" aria-label="Eliminar ${notaLabel}">
                  <i class="fa-solid fa-trash" aria-hidden="true"></i>
                </button>
                
                <button type="button" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#nota-modal" aria-label="Editar ${notaLabel}">
                  <i class="fa-solid fa-pen" aria-hidden="true"></i>
                </button>

              </div>
            </div>
          </div>

          <div class="card-body">
            <p class="card-text nota-titulo">${titulo}</p>
          </div>

        </div>
      </div>
    `;
    $("#notas-container").append(nuevaNota);
    nextNota++;

    $("#nota-modal").find("#nota-titulo").val("");
  });

  $(document).on("click", ".delete-nota", function () {
    $(this).closest(".nota-column").remove();
  });
});
