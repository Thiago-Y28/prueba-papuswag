// let deportista = {
// 	energia: 100,
//     experiencia: 10,
//     nombre: "Aimar",
//     entrenarHoras: function(horas){
//        this.energia =  this.energia - (5 * horas)
//       console.log(this.energia)
//         this.experiencia = this.experiencia + (horas * 2) 
//       console.log (this.experiencia)
//     } 
//     };
// deportista.entrenarHoras(3);

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(horas){
        deportista.energia = this.energia - (5 * horas)
       return this.energia,
        this.experiencia = deportista.experiencia + (2 * horas);
       return this.experiencia;
    } 
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
