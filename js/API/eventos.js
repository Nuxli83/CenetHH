//eventos
$(function(){
	document.addEventListener("deviceready", function(){
		if(!estaRegistrado())
			window.location.href="#registro";
		$('#regEnv').tap(function(){
			var nom = $('#regNom').val();
			var mail = $('#regEma').val();
			var tel = $('#regTel').val();
			var foto = $('#regFoto').attr('foto');
			
			if(nom != '' && mail != '' && tel != '' && foto != '' && foto != undefined){
				$('.loader').show();
				$('.title div').text('enviando datos');
				$(this).hide();
				enviarDatos(nom,mail,tel,foto);
			}else{
				navigator.notification.alert('Todos los campos son requeridos',null,'Error','Aceptar');
			}
		});
		
		//Tomar Foto
		$('#regFoto').tap(function(){
			tomarFoto();
		});
		
		//Acciones de nueva reserva
		$('#nr1 ul:eq(0) li').tap(function(){
			alert('nada')
			if($(this).index()>0){
				$('#nr1 ul:eq(0) li').css('background','');
				$(this).css('background','yellow');
				$('#nr1').attr('th',$(this).index());
			}
		});
		$('#nrSig').tap(function(){
			if($('#nr1').attr('th') != undefined && $('#nr1').attr('th') != '')
			window.location.href = '#nr2';
						});
			$('#resEnv').tap(function(){
				var pr = $('#resPer').val();
				var ha = $('#resHab').val();
				var di = $('#resDia').val();
				var th = $('#nr1').attr('th');
				
				//preguntamos si tiene una conexion a internet
				
				if(estaConectado())
				//sincronizamos datos con el servidor
				enviarReservas(th,pr,ha,di)
				else
				
				//Guardamos datos localmente
				crearReservas(th,pr,ha,di);
				
				
				

		});
	}, false);
});

/*(function jQuery(selector){
	...
	return obj;
})$;*/