//FUNCIONES DECLARADAS - HOISTIG
console.log(saludar());

function saludar(nombre){
    return `Hola, buenas noches! ${nombre}`;
}

console.log(saludar("Teresa"));

//FUNCION FLECHA - NO HOISTING
//let saludar=()=>{} -->SINTAXIS

let saludo=(nombre2)=>`Hola, buenas noches! ${nombre2}`

console.log(saludo("Rafael"));

/*Crear una funcion que reciba como parametro un numero entero y un carcater,
retornar el caracter multiplicado por el numero entero*/

let generarCaracteres=(numero,caracter)=>{
    let respuesta="";
    for(let i=0; i<numero; i++){
        respuesta+=caracter;
    }
    return respuesta;
}

console.log(generarCaracteres(7,"a"));

/*Crear una funcion que tome como parametro un arreglo de numeros,
retornar la suma de todos los numeros de arreglo*/

let  sumaArrreglo =(arreglo)=>{
    let suma=0;
    let longitud=arreglo.length;
    for(let i=0; i<longitud; i++){
        suma+=arreglo[i];
    }
    return suma;
}

console.log(sumaArrreglo([2,3,6,1]));
console.log(sumaArrreglo([8,9,10,2,4,5]));

/*Crear una funcion que tome un objeto como parametro y devuelva un array
con todas las propiedades del obejto*/

let objeto=(obj)=>{
    return Object.keys(obj);
}

console.log(objeto({nombre:"Teresa", edad:23, direccion:"Quito"}));

/*Crear una funcion que a partir de precio y descueto de un producto calcular:
El precio neto, aplicando el descuento pero no el impuesto del IVA.
La cantidad que corresponda al IVA.
El precio final, es decir, el precio neto mas el Iva calculado. */


let calcularPreciosConPrompt = () => {
let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let descuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
let tasaIVA = parseFloat(prompt("Ingrese la tasa de IVA (en porcentaje):"));
  
let precioNeto = precio - (precio * (descuento / 100));
let iva = precioNeto * (tasaIVA / 100);
let precioFinal = precioNeto + iva;
  
console.log(`Precio neto: ${precioNeto.toFixed(2)}`);
console.log(`IVA: ${iva.toFixed(2)}`);
console.log(`Precio final: ${precioFinal.toFixed(2)}`);
};
  
calcularPreciosConPrompt();

/*Crear una función que ingrese dos números por teclado, realizar un menú de opciones para:
Sumar -- Restar -- Multiplicar y Dividir.Crear una función que lea tres notas de un alumno, 
calcula el promedio e indica si está suspendido o aprobado. (<=6 "Suspendido" -- >=7 "Aprobado"). */

// Función flecha para realizar operaciones matemáticas
let operacionesMatematicas = () => {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación a realizar (sumar, restar, multiplicar, dividir):");
  
    switch (operacion) {
      case "sumar":
        console.log(`El resultado de la suma es: ${num1 + num2}`);
        break;
      case "restar":
        console.log(`El resultado de la resta es: ${num1 - num2}`);
        break;
      case "multiplicar":
        console.log(`El resultado de la multiplicación es: ${num1 * num2}`);
        break;
      case "dividir":
        if (num2 !== 0) {
          console.log(`El resultado de la división es: ${num1 / num2}`);
        } else {
          console.log("No se puede dividir por cero.");
        }
        break;
      default:
        console.log("Operación no válida.");
    }
  };
  
  // Función flecha para calcular el promedio y determinar si el alumno está suspendido o aprobado
  let calcularPromedio = () => {
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    let promedio = (nota1 + nota2 + nota3) / 3;
  
    if (promedio <= 6) {
      console.log(`El promedio es ${promedio.toFixed(2)}. El alumno está suspendido.`);
    } else {
      console.log(`El promedio es ${promedio.toFixed(2)}. El alumno está aprobado.`);
    }
  };
  
  // Ejemplo de uso de las funciones
  operacionesMatematicas();
  calcularPromedio();
  

