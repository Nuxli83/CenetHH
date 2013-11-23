//Almacenamiento
function crearUsuario(nombre,id){
	window.localStorage.setItem("nombre",nombre);
	window.localStorage.setItem("id",id);
}
function estaRegistrado(){
	var id = window.localStorage.getItem("id");
	if(id == undefined)
		return false;
	else
		return true;
}

//WEB SQL (SQLLite)

function accesoBD()
{
	var bd = window.openDatabase("hotel","1.0","Hotel Cenet",200000);
	
	return db;

}

function crearReservas(th,pr,ha,di)
{
		function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (id unique, th,pr,ha,di)');
    tx.executeSql('INSERT INTO reservas (th,pr,ha,di) VALUES ( "'+th+'","'+pr+'","'+ha+'","'+di+'")');

}

function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}



function successCB() {
    navigator.notification.alert("Esperando a conexión para sincronizar",null,"Reserva Guardada","De acuerdo");
}

	
	
}

