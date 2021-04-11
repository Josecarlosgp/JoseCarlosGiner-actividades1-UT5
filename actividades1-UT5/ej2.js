'use strict';

/* Ejercicio 2. Crea una función llamada verAsignaturas. Esta función va a recibir un número indeterminado de alumnos. 
De cada alumno va a recibir un array. En ese array estará almacenado el nombre, el curso y las asignaturas de las que está matriculado 
(una asignatura en cada posición). Saca por pantalla el nombre del alumno – el curso – asignaturas: 
y el nombre de las asignaturas separadas por un /. Si el número de datos de alumnos es 0 debes mostrar la cadena 
“No hay datos para mostrar”.Debes usar el operador rest, la desestructuración de arrays y  el código lo más compacto posible. */

function verAsignaturas(...alumnos)
{
	if(alumnos.length)
	{
		for(let i of alumnos)
		{
			console.log("Nombre: "+ i[0] + " - " + "Curso: "+ i[1] + " - " + alumnos.length +  " asignaturas: " + alumnos.join("/"));
		}
	}
	else 
	{
		console.log("No hay datos para mostrar")
	}
}


// let alumnoX = new Array(nombre,curso,[asignaturas]);
// alumnoX[0] = ("Jose","DAMB","Java", "C#", "C++");
verAsignaturas(["Jose","DAMB",["Java","C#","C++"]]);
verAsignaturas(["PAU","DAMA",["Java", "Cfa", "C+efafa"]]); 


/* Al comprobar los ejercicios con pau vi que el hizo esto, pero como me dijiste que no era la forma correcta lo de crear objetos en js lo he intentado de la otra forma 
   pero no consigo sacarla
'use strict'; 

function alumno(nombre, curso, ...asignaturas){
    this.nombre = nombre;
    this. curso = curso;
    this.asignaturas = asignaturas;
}

let alumno1 = new alumno("Jose", "Asir", "ED","LM");
let alumno2 = new alumno("Pau","DAM","prog","LM","ED")

function verAsignaturas(...alumno)
{
        if(alumno.length) 
		{
			for(let i=0; i < alumno.length; i++)
            {
               console.log(alumno[i].nombre + "-" + alumno[i].curso + "- asignaturas: " + alumno[i].asignaturas.join('/'));
            }
		}
		
        else
			console.log("No hay datos para mostrar")
        
    } 
verAsignaturas(alumno1,alumno2); */



