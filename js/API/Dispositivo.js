// JavaScript Document
function dis()
{
	var arr = [];
	
	arr['modelo'] = device.model;
	arr['phonegap'] = device.cordova;
	arr['plataforma'] = device.platform;
	arr['id'] = device.uuid;
	arr['nombre'] = device.name;
	
	return arr;
	
	
}
