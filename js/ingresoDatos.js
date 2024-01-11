//IMPRIMIR UN MESAJE EN EL DOCUMENTO
document.writeln("HOla mundo!");
alert("hola mundoi");

//INGRESAR DATOS POR TECLADO
let numero1=prompt("ingrese un numero");
let numero2=prompt("Ingrese otro numero");
let suma;

let n1=parseInt(numero1);
let n2=parseInt(numero2);
suma=n1+n2;
document.writeln(suma);
console.log(`La suma es ${suma}`);

//TABLA DE MULTIPLICAR
let multi=parseInt(prompt("Ingrese el factor"));
for(let i=1; i<=10; i++){
    let multiplicar=i*multi;
    console.log(multiplicar);
}