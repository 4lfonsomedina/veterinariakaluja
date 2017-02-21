
$(document).ready(function(){
	//dash timer

	//mascotas
	var timer="";
		$.post("http://veterinariakaluja.com/index.php/UsuarioController/mascotas", function(r){
			$("#dash_contenido").html(r);
		})

		$(document).on("click","#mascotas_dash",function(){
			$.post("http://veterinariakaluja.com/index.php/UsuarioController/mascotas", function(r){
				clearInterval(timer);
			$("#dash_contenido").html(r);
			})
		})

		$(document).on("click","#servicios_dash",function(){
			clearInterval(timer);
			$.post("http://veterinariakaluja.com/index.php/UsuarioController/servicios", function(r){
			$("#dash_contenido").html(r);
			})
		})

		$(document).on("click","#curso_dash",function(){
			clearInterval(timer);
			servicios_en_curso();
			timer = setInterval(function(){
				servicios_en_curso();
			 }, 15000);
		})

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
	function servicios_en_curso(){
			$.post("http://veterinariakaluja.com/index.php/UsuarioController/servicios_en_curso", function(r){
				if(r!='0')
					$("#dash_contenido").html(r);
			})
		}

	
})

