
$(document).ready(function(){

	/**********************/
$(document).on("click",".calif",function(){
	var c = this.id.split("_");
		loading();
		$.post("http://veterinariakaluja.com/index.php/UsuarioController/guardar_calificacion",{c:c[1],id:c[2]},function(r){
			$("#modal-header").html("Servicio Calificado!");
			$("#modal-body").html(r);
		})
	})
/***********************/

	//mejora
	$(document).on("click","#s_mejora",function(){
		loading();
		$.post("http://veterinariakaluja.com/index.php/SoporteController/mejora",function(r){
			$("#modal-header").html("Sugerencia de mejora");
			$("#modal-body").html(r);
		})
	})
	//falla
	$(document).on("click","#s_falla",function(){
		loading();
		$.post("http://veterinariakaluja.com/index.php/SoporteController/falla",function(r){
			$("#modal-header").html("Reportar falla");
			$("#modal-body").html(r);
		})
	})
	//ayuda
	$(document).on("click","#s_ayuda",function(){
		loading();
		$.post("http://veterinariakaluja.com/index.php/SoporteController/ayuda",function(r){
			$("#modal-header").html("Solicitud de ayuda");
			$("#modal-body").html(r);
		})
	})
	

	function loading(){
		$('body').removeClass('with--sidebar');
		$("#myModal").modal("show");
		$("#modal-header").html("Cargando...");
		$("#modal-body").html("<div class='spinner'>"+
								  "<div class='bounce1'></div>"+
								  "<div class='bounce2'></div>"+
								  "<div class='bounce3'></div>"+
								"</div><br><br>");
	}
})

