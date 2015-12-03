var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");
var mimeTypes = { "html": "text/html", "jpeg": "image/jpeg", "jpg": "image/jpeg", "png": "image/png", "js": "text/javascript", "css": "text/css", "swf": "application/x-shockwave-flash"};

var modulo = require('./ServidorJuego.js');

//Datos del servidor
var NombreUsuarios = [];
var PassUsuarios = [];
var UsuariosRegistrados=0;

this.calcular=function (operacion, val1, val2) {
	if (operacion=="Jugar"){
		for (var i = 0; i < UsuariosRegistrados; i++) {
    			if (NombreUsuarios[i]==val1 && PassUsuarios[i]==val2) {
      				return "Logueado en el juego";
    			}
		}
		return "No existe el usuario";
	} 
	else if (operacion == "Registrar"){
		if((val1 != "") && ( val2 != "")){
			UsuariosRegistrados++;
			NombreUsuarios.push(val1);
			PassUsuarios.push(val2);
			return "Registro realizado";
		}
		else
			return "No se pueden registrar esos datos";
	} 
	else return "Error: Par&aacute;metros no v&aacute;lidos";
}

var httpServer = http.createServer(
	function(request, response) {
		var uri = url.parse(request.url).pathname;
		if (uri=="/") uri = "/views/Inicio.html";
		var fname = path.join(process.cwd(), uri);
		fs.exists(fname, function(exists) {
			if (exists) {
				fs.readFile(fname, function(err, data){
					if (!err) {
						var extension = path.extname(fname).split(".")[1];
						var mimeType = mimeTypes[extension];
						response.writeHead(200, mimeType);
						response.write(data);
						response.end();
					}
					else {
						response.writeHead(200, {"Content-Type": "text/plain"});
						response.write('Error de lectura en el fichero: '+uri);
						response.end();
					}
				});
			}
			else{
				while (uri.indexOf('/') == 0) uri = uri.slice(1);
				var params = uri.split("/");
				if (params.length >= 3) { //REST Request
					console.log("Peticion REST: "+uri);
					var result = modulo.calcular(params[0], params[1], params[2]);
					response.writeHead(200, {"Content-Type": "text/html"});
					response.write(result.toString());
					response.end();
				}
				else {
					console.log("Peticion invalida: "+uri);
					response.writeHead(200, {"Content-Type": "text/plain"});
					response.write('404 Not Found\n');
					response.end();
				}
			}
		});		
	}
);
httpServer.listen(process.env.PORT || 5000, process.env.IP || "0.0.0.0");
console.log("Servicio HTTP iniciado");
