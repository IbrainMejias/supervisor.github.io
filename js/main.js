
$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover();
$(buscar_datos());

// Pasar al campo siguiente con el Enter
// $('input').on('keydown',function(e){
//     var keyCode = e.keyCode || e.which;
//      if(e.keyCode === 13) {
//       e.preventDefault();
//       $('input')[$('input').index(this)+1].focus();
//       }
// });

function buscar_datos(consulta)
{
	$.ajax({
		url: 'buscar.php' ,
		type: 'POST' ,
		dataType: 'html',
		data: {consulta: consulta},
	})
	.done(function(respuesta){
		$("#datos").html(respuesta);
	})
	.fail(function(){
		console.log("error");
	});
}

$(document).on('keyup','#caja_busqueda', function(){
	var valor = $(this).val();
	if (valor != "") {
		buscar_datos(valor);
	}else{
		buscar_datos();
	}
});

$(window).scroll(function() {
	if ($("#menu").offset().top > 56) {
		$("#menu").addClass("bg-light");
	} else {
		$("#menu").removeClass("bg-light");
	}
});