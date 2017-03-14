
$(document).ready(function(){

	/***************solicitar ubicacion*****************/
	

	/***************solicitar servicio******************/


	/******************************admin**********************************/
		var timer;
		clearInterval(timer);
		admin_servicios_activos();
		timer = setInterval(function(){
			admin_servicios_en_curso();
		}, 15000);

		$("#curso_admin_dash").click(function(){
			clearInterval(timer);
			$.post("http://veterinariakaluja.com/index.php/AdminController/servicio_en_curso",{}, function(r){
				$("#dash_contenido").html(r);
			})
		})
		//solicitudes_admin_dash
		$("#solicitudes_admin_dash").click(function(){
			clearInterval(timer);
			admin_servicios_activos();
			timer = setInterval(function(){
				admin_servicios_en_curso();
			 }, 15000);
		})
		//http://veterinariakaluja.com/index.php/AdminController/servicios_activos
		function admin_servicios_activos(){
			$.post("http://veterinariakaluja.com/index.php/AdminController/servicios_activos", function(r){
				if(r!='0')
					$("#dash_contenido").html(r);
				else
					$("#dash_contenido").html("<h2 style='color:white'>Sin servicios Activos</h2>");
			})
		}
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
	//configuracion
	$(document).on("click","#configuracion_dash2",function(){
		loading();
		$.post("http://veterinariakaluja.com/index.php/AdminController/configuracion_vista",function(r){
			$("#modal-header").html("Configuracion de cuenta");
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
	function page_loading(){
		$("#soporte").hide();
		$('body').removeClass('with--sidebar');
		$("#dash_contenido").html("<center><div class='spinner' style='color:white;'>"+
								  "<div class='bounce1'></div>"+
								  "<div class='bounce2'></div>"+
								  "<div class='bounce3'></div>"+
								"</div></center>");
	}
	function servicios_en_curso(){
			$.post("http://veterinariakaluja.com/index.php/UsuarioController/servicio_en_curso", function(r){
				page_loading();
				if(r!='0')
					$("#dash_contenido").html(r);
			})
		}
})

