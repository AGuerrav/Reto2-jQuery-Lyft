$(document).ready(function () {

  //para que desaparezca la primera pantalla
  setTimeout(function() {
    $(".fill").fadeOut(0);
    },5000);
  //para que la pantalla contenido no este durante los primeros 5 segundos
  setTimeout(function() {
    $(".start2").fadeOut(0);
  },0);
  //para que la pantalla contenido vuelva luego de los primeros 5 segundos
  setTimeout(function() {
    $(".start2").fadeIn(0);
  },5000);
  //para inicializar mi pluggins para el input de las banderas
  $("#demo").intlTelInput();

  //para validar que son 10 numeros en el numero telefonico y se habilite el boton NEXT
  $('.numberPhone').keyup(function() {
    //almacenar en la variable los numeros de telefono
    var phone = $('.numberPhone').val();
    //console.log(phone);
    if(phone.length >9) {
      $('.btn-next').removeAttr("disabled");
   } else {
     $('.btn-next').attr("disabled"," ");
   }
  })
});
//para generar el numero aleatorio cuando clickeo el boton NEXT
var randomNum = Math.floor(Math.random()*1000)+100
$(".btn-next").click(function(){
 alert("tu codigo LAB" + randomNum );
});
//para reenviar un codigo
var randomNum = Math.floor(Math.random()*1000)+100
$(".btn-resend").click(function(){
 alert("tu codigo LAB" + randomNum );
});
//
