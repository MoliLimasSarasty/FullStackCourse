//Declaración e iniclización de un arreglo de tipo String
var arregloNombres = ['Felipe','Joel','Luis Mario','Carlos'];

//Opcion 1
console.log(arregloNombres[0]);
console.log(arregloNombres[1]);
console.log(arregloNombres[2]);
console.log(arregloNombres[3]);


//Opcion 2
for (let j = 0; j < arregloNombres.length; j++) {
    const element = array[j];
    console.log(element);
}


//Mostrar en console de mi navegador que datos tengo en mi arreglo
console.log(arregloNombres);


//alerta
alert(arregloNombres[2]); // 'Luis Mario'

alert(arregloNombres[0]); // 'Felipe'


arregloNombres[0] = 'Ivan';

alert(arregloNombres[0]); 

//Mostrar en console de mi navegador que datos tengo en mi arreglo
console.log(arregloNombres);

//Caso de uso donde no existe elemento o indice en mi arreglo 
alert(arregloNombres[20]); 

//Se añade un valor nuevo
arregloNombres.push('Ramiro');
console.log(arregloNombres);

//Se elimina el último
arregloNombres.pop();
console.log(arregloNombres);

//Se agrega al inicio del arreglo
arregloNombres.unshift('Felipe');
arregloNombres.shift();
console.log(arregloNombres);


arregloNombres.unshift('Felipe 2');
console.log(arregloNombres);

//arregloNombres.splice(0,1,'Mónica'); //Caso 1: Elimina
arregloNombres.splice(0,0,'Mónica');//Caso 2 : Inserta pero no elimina
console.log(arregloNombres);



//=============================================================

var arregloTipo  = ['Mónica',67,true,23.56];

console.log(arregloTipo);
console.log(typeof arregloTipo[1]);

console.log(typeof arregloTipo[2]);

if (typeof arregloTipo[2] == 'boolean'){
    alert('Es un booleano');
}


//Como sacar la cantidad de elementos de un arreglo
console.log(arregloNombres.length);
console.log(arregloTipo.length);

//para ( i = 0; i < cantidad de elementos del arreglo; i++ )
for (let i = 0; i < arregloNombres.length; i++) {
    const element = arregloNombres[i]; //0
    console.log(element); 
}
