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
	function loading(){
		$("#myModal").modal("show");
		$("#modal-header").html("Cargando...");
		$("#modal-body").html("<div class='spinner'>"+
								  "<div class='bounce1'></div>"+
								  "<div class='bounce2'></div>"+
								  "<div class='bounce3'></div>"+
								"</div><br><br>");
	}
})