
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

	$("#reg").click(function(){
		loading();
		$.post("http://veterinariakaluja.com/index.php/UsuarioController/registro",function(r){
			$("#modal-header").html("Registro");
			$("#modal-body").html(r);
		})
	})
	$("#dash_alta_admin").click(function(){
		loading();
		$.post("http://veterinariakaluja.com/index.php/AdminController/form_alta_admin",function(r){
			$("#modal-header").html("Registro de integrante");
			$("#modal-body").html(r);
		})
	})
	$("#sess").click(function(){
		loading();
		$.post("http://veterinariakaluja.com/index.php/UsuarioController/inicio_session",function(r){
			$("#modal-header").html("Entrar");
			$("#modal-body").html(r);
		})
	})
	$("#reg2").click(function(){
		loading();
		$.post("http://veterinariakaluja.com/index.php/UsuarioController/registro",function(r){
			$("#modal-header").html("Registro");
			$("#modal-body").html(r);
		})
	})
	//recuperar pass
	$("#s_mejora").click(function(){
		loading();
		$.post("http://veterinariakaluja.com/index.php/SoporteController/mejora",function(r){
			$("#modal-header").html("Sugerencia de mejora");
			$("#modal-body").html(r);
		})
	})
	
	//olvide pass
	$(document).on("click","#olvide_pass",function(){
		loading();
		$.post("http://veterinariakaluja.com/index.php/SoporteController/recuperar_pass_vista1",function(r){
			$("#modal-header").html("Recuperar password");
			$("#modal-body").html(r);
		})
	})
	//catalogo
	$(document).on("click","#catalogo",function(){
		loading();
		$.post("http://veterinariakaluja.com/index.php/UsuarioController/catalogo",function(r){
			$("#modal-header").html("Catalogo");
			$("#modal-body").html(r);
		})
	})
	$(document).on("click",".finalizar_servicio",function(){
		loading();
		var id = this.id.split("_");
		id=id[1];
		$.post("http://veterinariakaluja.com/index.php/AdminController/finalizar_servicio",{id:id},function(r){
			$("#modal-header").html("Finalizar Servicio");
			$("#modal-body").html(r);
		})
	})
	$(document).on("click",".consulta",function(){
		loading();
		var id = this.id.split("_");
		id=id[1];
		$.post("http://veterinariakaluja.com/index.php/AdminController/consulta",{id:id},function(r){
			$("#modal-header").html("Consulta");
			$("#modal-body").html(r);
		})
	})
	$(document).on("click",".vacuna",function(){
		loading();
		var id = this.id.split("_");
		id=id[1];
		$.post("http://veterinariakaluja.com/index.php/AdminController/vacuna",{id:id},function(r){
			$("#modal-header").html("Vacuna");
			$("#modal-body").html(r);
		})
	})
	$(document).on("click",".atendiendo_servicio",function(){
		loading();
		var id = this.id.split("_");
		id=id[1];
		$.post("http://veterinariakaluja.com/index.php/AdminController/atendiendo_servicio",{id:id},function(r){
			$("#modal-header").html("Atendiendo Servicio");
			$("#modal-body").html(r);
		})
	})
	$(document).on("click","#plus_mascota",function(){
		loading();
		$.post("http://veterinariakaluja.com/index.php/UsuarioController/form_alta_mascota",function(r){
			$("#modal-header").html("Nueva Mascota");
			$("#modal-body").html(r);
		})
	})
	$(document).on("click",".ver_imagen_consulta",function(){
		loading();
		var id = this.id.split("_");
		id=id[1];
			$("#modal-header").html("Foto Consulta");
			$("#modal-body").html("<center><img src='http://veterinariakaluja.com/assets/img/consultas/consulta_"+id+"_thumb.jpg' width='90%'></center>");
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
	$(document).on("click",".datos_mascota2",function(){
		var id = this.id.split("_");
		id=id[1];
		loading();
		$.post("http://veterinariakaluja.com/index.php/MascotaController/datos_mascota2",{id:id},function(r){
			$("#modal-header").html("Ficha de Mascota");
			$("#modal-body").html(r);
		})
	})
	$(document).on("click",".mapa_admin",function(){
		var id = this.id.split("_");
		id=id[1];
		loading();
		$.post("http://veterinariakaluja.com/index.php/AdminController/mapa",{id:id},function(r){
			$("#modal-header").html("Direccion");
			$("#modal-body").html(r);
		})
	})
	$(document).on("click",".abrir_servicio_admin",function(){
		var id = this.id.split("_");
		id=id[1];
		loading();
		$.post("http://veterinariakaluja.com/index.php/AdminController/abrir_servicio",{id:id},function(r){
			$("#modal-header").html("Servicio activo");
			$("#modal-body").html(r);
		})
	})
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

