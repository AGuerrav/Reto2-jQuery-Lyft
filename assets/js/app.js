$(document).ready(function () {

})
var idPin = 0;
function savePin(){
  var titulo = $('#tituloInput').val(); //variable para rescatar el valor del input del titulo
  var descripcion = $('#descripcionInput').val(); //variable para rescatar el valor del input del descripcion
  var url = $ ('#urlInput').val(); //variable para rescatar el valor URL del input para ingresar la imagen

  $("#pines").append("<div id='pin_" + idPin + "' class='pin col-md-3'>" +
        //Este es el frente
        "<div class='panel panel-success front'>" +
        "<div class='panel-heading'>" +
        "<h3 class='panel-title'>" + titulo + "</h3>" +
        "</div>" +
        "<div class = 'panel-body'>" +
        "<a href='#' class='thumbnail'>" +
        "<img src='" + url + "' alt='...'>" +
        "</a>" +
        "</div>" +
        "<div class ='panel-footer'>" + descripcion + "</div> </div>" +
        //Este es el panel detrás
        "<div class='rear'>" +
        "</div>" +
        "</div>");
};
