
$(document).ready(function(){
	/***************solicitar servicio******************/
	$(document).on("click",".ver_servicio",function(){
		var id = this.id.split("_");
		id=id[1];
		loading();
		$.post("http://veterinariakaluja.com/index.php/MascotaController/ver_servicio",{id:id},function(r){
			$("#modal-header").html("Servicio Kaluja");
			$("#modal-body").html(r);
		})
	})
	$(document).on("click",".sol_serv",function(){
		var id = this.id.split("_");
		id=id[1];
		loading();
		$.post("http://veterinariakaluja.com/index.php/MascotaController/solicitar_servicio",{id:id,s:""},function(r){
			$("#modal-header").html("Solicitud de servicio");
			$("#modal-body").html(r);
		})
	})
	$(document).on("click",".sol_servicio",function(){
		var s = this.id.split("_");
		s=s[1];
		loading();
		$.post("http://veterinariakaluja.com/index.php/MascotaController/solicitar_servicio",{id:"",s:s},function(r){
			$("#modal-header").html("Solicitud de servicio");
			$("#modal-body").html(r);
		})
	})
	/**************alta mascota*****************/
	$(document).on("submit", "#mascota_form", function(event){
	    event.preventDefault();
	    var url=$(this).attr("action");
	    $.ajax({
	        url: url,
	        type: $(this).attr("method"),
	        dataType: "POST",
	        data: new FormData(this),
	        processData: false,
	        contentType: false,
	        success: function (data, status)
	        {
	        	
	        },
	        error: function (xhr, desc, err)
	        {
	        	$("#myModal").modal("hide");
	        	page_loading();
	        	$.post("http://veterinariakaluja.com/index.php/UsuarioController/mascotas", function(r){
					$("#dash_contenido").html(r);
				})
	        }
	    });        
	});

>>>>>>> 10d78686d22d8ba900015f65754dde39c0bee368
	$(document).on("change","#file_foto",function(){
      	addImage(this); 
     });
	function addImage(input) {
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();
	        reader.onload = function (e) {
	            $('#mfoto').attr('src', e.target.result);
	        }
	        reader.readAsDataURL(input.files[0]);
	    }
	}
	/*********************************/
	$(document).on("click","#plus_mascota",function(){
		loading();
		$.post("http://veterinariakaluja.com/index.php/UsuarioController/form_alta_mascota",function(r){
			$("#modal-header").html("Nueva Mascota");
			$("#modal-body").html(r);
		})
	})
	$(document).on("click",".datos_mascota",function(){
		var id = this.id.split("_");
		id=id[1];
		loading();
		$.post("http://veterinariakaluja.com/index.php/MascotaController/datos_mascota",{id:id},function(r){
			$("#modal-header").html("Ficha de Mascota");
			$("#modal-body").html(r);
		})
	})
/*******************************************************************/
	//mascotas
	var timer="";
		$.post("http://veterinariakaluja.com/index.php/UsuarioController/mascotas", function(r){
			$("#dash_contenido").html(r);
		})

		$(document).on("click","#mascotas_dash",function(){
			page_loading();
			$.post("http://veterinariakaluja.com/index.php/UsuarioController/mascotas", function(r){
				clearInterval(timer);
			$("#dash_contenido").html(r);
			})
		})

		$(document).on("click","#servicios_dash",function(){
			clearInterval(timer);
			page_loading();
			$.post("http://veterinariakaluja.com/index.php/UsuarioController/servicios", function(r){
			$("#dash_contenido").html(r);
			})
		})

		$(document).on("click","#curso_dash",function(){
			clearInterval(timer);
			page_loading();
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

