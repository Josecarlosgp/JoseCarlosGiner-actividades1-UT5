'use strict';

function funcionEjercicio()
{
	console.log("Se acabó el juego")
}



function ejercicio1(cadena,booleano,array,funcionEjercicio)
{
	if(booleano == true)
	{
		// array.forEach(x => console.log(a);
		let producto = 1;
		array.forEach(productos => productos*=productos);
		
		if(producto>100)
		{
			if(cadena.includes('a'))
				console.log("La letra 'a' no está permitida");
			else
				console.log("Muy bien no has usado la letra 'a'");
				
		}
		else
		{
			console.log("El resultado de tu array es insuficiente para comprobar la cadena");
		}	
	}
	else
	{
		funcionEjercicio();
	}
}

// ejercicio1();
ejercicio1("hola mundo",true,[1,2,3,4],funcionEjercicio);
ejercicio1("Sí",true,[10,20,30,40],funcionEjercicio);
ejercicio1("Sí",false,[10,20,30,40],funcionEjercicio);

