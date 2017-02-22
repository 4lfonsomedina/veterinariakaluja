$(document).ready(function(){
	/***************Solicitar servicio***********************/
	
	$(document).on("click",".sol_serv",function(){
		alert("mascotas");
		var id = this.id.split("_");
		id=id[1];
		loading();
		$.post("http://veterinariakaluja.com/index.php/MascotaController/solicitar_servicio",{id:id,s:""},function(r){
			$("#modal-header").html("Solicitud de servicio");
			$("#modal-body").html(r);
		})
	})
})