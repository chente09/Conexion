//comentarios en una sola linea
/*cometaroios en ma de una linea*/

//imprimir un mensaje en consola
console.log("Hola mundo!");

//DECLARACION DE VARIABLES
let nombre="VICENTE";
let apellido="NENGER";
let edad=23;

//CONCATENACION DE CADENAS
console.log("MI NOMBRE ES "+nombre+ "Y MI APELLIDO ES "+apellido+ "MI EDAD ES: "+edad+ "AÑOS");

//TEMPLATE DE CADENAS - INTERPOLACION DE CADENAS
console.log(`MI NOMBRE ES ${nombre} ${apellido} TENGO ${edad} AÑOS`);

//TIPO DE DATOS UNDEFINED
let a;
console.log(a);

//TIPO DE DATO NAN
let b=5;
let c="hola";
let multi=b*c;
console.log(multi);

//TIPO DE DATOS OBJETO
const persona={
    nombre:"Vicente",
    apellido:"Nenger",
    edad:23,
    estado_civil:"soltero",
    pasatiempo:["leer","Escribir","Codificar"],
    estudios:{
        primaria:"Escuela Gotitas del Saber",
        secundaria:"VVc",
        superior:"EPN"
    },
    saludar: function(){
        return "Buenas Noches!";
    }
}
console.log(persona.nombre);
console.log(persona.saludar());

//TIPO DE DATO ARRAY

const arreglo=["hola", true, 22, "Chao"];
console.log(arreglo);
console.log(arreglo[1]);

arreglo.push("Pedro");
console.log(arreglo);
arreglo.pop();
console.log(arreglo);

//OPERADOR TYPEOF
//nos permite conocer el tipo de dato
console.log(typeof a);
