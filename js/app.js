window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var nombreUser = document.getElementById("nombre").value;
		var	edadUser = parseInt(document.getElementById("edad").value);
		var	generoUser = document.getElementById("genero").value;

		var persona1 = new Datos(nombreUser, edadUser, generoUser);
		document.getElementById("demo").innerHTML = persona1.saludar();
	});
	function Datos(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.mayorDeEdad = (this.edad >= 18) ? "mayor" : "menor" ;
    this.saludar = function() { 
    	return "Hola soy " + this.nombre +  ", tengo " + this.edad +  " años y soy " + this.mayorDeEdad + " de edad." ; 
		}
	}
});