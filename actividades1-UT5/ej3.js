'use strict';
/* Pide datos al usuario y crea un array insertando los datos al principio. 
Los datos tienen que ser de tipo numérico, si introduce uno que no sea de tipo numérico dejarás de pedir datos 
(puedes utilizar isNaN(caracter) que te devuelve un booleano indicando si el carácter definido es un número o no). 
Si estamos ante un número de vez que le pedimos el dato par, utiliza el operador + para convertir a número, 
si no conviértelo mediante el constructor Number(). Seguidamente,ordena el array de mayor a menor conservando
del array original sólo los múltiplos de 3 (usa el método filter). Muestra ambos por pantalla.
*/

let array = new Array();

let esNumerico = new Boolean(true);
do
{
	let numerico = +(prompt("Dime un dato numerico"))

	if(isNaN(numerico) == false)
	{
		array.unshift(numerico);
	}
	else{
		esNumerico = false;
	}
		
}while(esNumerico == true); 

let arrayNuevo = array;
console.log(array);

console.log(arrayNuevo.sort((n1,n2) => n2-n1).filter(num => num%3 == 0));







