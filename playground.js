// function noParesDeContarImparesHasta(numero1) {
//     for (let numero = 0; numero <= numero1; numero++){
//     if( numero % 2 !== 0 ){
//             console.log(numero);
//         }

//     }
// }
// noParesDeContarImparesHasta(15)

// function noParesDeContarImparesHasta(numero1) {
//     for (let numero = 0; numero <= numero1; numero++){
//         let resultado = numero1 % 2 
//     if(resultado !== 0 ){
//             return numero
//         }

//     }
// }
// //noParesDeContarImparesHasta(15)


// function doble (n1){
//     return n1*2
//     }
//     function triple (n2){
//     return n2*3
//     }
    
//     function aplicarCallback(n3, interna){
    
//     console.log(interna(n3))
    
//     }
    
//     aplicarCallback(2, doble)
//     aplicarCallback(5, triple)

// function suma(n1, n2){
//     let resultado = n1 + n2;
//     return resultado
//     }
//     function multiplicacion(n3, n4){
//     let resultado = n3 * n4;
//     return resultado
//     }
//     function resta(n5, n6){
//     let resultado = n5 - n6;
//     return resultado
//     }  
//     function division(n7, n8){
//     let resultado = n7/n8;
//     return resultado
//     } 
//     function calculadora(n1, n2, interna){
//         return interna(n1, n2)
//     }

// .map() Realiza una operacion en base a lo que le indiquemos,
//  el parametro es el elemento del array
//  let numeros = [1, 2, 4, 8, 16]

// let numerosx2 = numeros.map( function (unumero) {
//     console.log(unumero/2) 
// })


// .filter() Filtra en base a la condicion del callback, el parametro es el elemento del array
// let edades = [15, 18, 21, 11, 9]
// let mayores = edades.filter( function(edadx){

// console.log(edadx >=18)
// })

// let numeros = [5, 7, 12, 20, 100]
// let numeroSumados = numeros.reduce(function(acumulador, uNumero){
// return acumulador + uNumero;
// })
// console.log(numeroSumados)




// let horariosPartida = [12, 14, 18, 21];

// let horariosAtrasados = horariosPartida.map(function(nuevoHorario){

// return nuevoHorario - 1;

// })
// console.log(horariosAtrasados)

// let vueltas = [5, 8, 12, 3, 22]

// let totalVuletas = vueltas.reduce(function(acumulador, numeroX){
//     return acumulador + numeroX;
// })
// console.log(totalVuletas)


// let estudiantes = [
//     {nombre: 'John', promedio: 8.5, aprobado: true},
//     {nombre: 'Jane', promedio: 7, aprobado: true},
//     {nombre: 'June', promedio: 3, aprobado: false},
// ]

// let aprobados = estudiantes.filter(function(aprobar){
// if(aprobar.aprobado === true){

// return aprobados
// }})


// let desaprobados = estudiantes.filter(function(desaprobar){
// if(desaprobar.aprobado === false)
// {
// return desaprobados
// }
// })

// console.log(aprobados)
// console.log(desaprobados)
// Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 





// Para esto debemos completar la función procesar. Esta recibe dos parámetros:

// 1. El primer parámetro es un array.

// 2. El segundo parámetro que recibe es una función (al que solemos llamar callback).

// La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada a un elemento del array pasado.

// Dejamos unas funciones para comprender y probar con el ejemplo:
// function agregarHttp(url) {
//     return // escribí tu código aquí
// }

function agregarHttp(url) {
    var linkEntero= [] ; 
 for(let i = 0; i<url.length; i++)
 {   
    linkEntero[i] = "http://" + url[i];
}

return linkEntero;
}

function procesar(arrayDelParametro, callback){
    
     return callback(arrayDelParametro)
    }

 console.log(procesar(["www.google.com"], agregarHttp))