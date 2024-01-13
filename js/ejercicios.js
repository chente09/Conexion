/*Crear una función que ingrese dos números por teclado, 
realizar un menú de opciones para: Sumar -- Restar -- Multiplicar y Dividir. */

let operaciones = () => {
    let num1 = parseFloat(prompt('Ingrese el primer número:'));
    let num2 = parseFloat(prompt('Ingrese el segundo número:'));
    let operacion = prompt('Elija una operación: Sumar, Restar, Multiplicar, Dividir');
    let calcular = (n1, n2, op) => {
      switch(op.toLowerCase()) {
        case 'sumar':
          return n1 + n2;
        case 'restar':
          return n1 - n2;
        case 'multiplicar':
          return n1 * n2;
        case 'dividir':
          return n1 / n2;
        default:
          return 'Operación no válida';
      }
    };
    const resultado = calcular(num1, num2, operacion);
    console.log(`El resultado es: ${resultado}`);
    document.writeln(`El resultado es: ${resultado}`);
  };
  
  operaciones();

/*Crear una función que lea tres notas de un alumno,
 calcula el promedio e indica si está suspendido o aprobado.
  (<=6 "Suspendido" -- >=7 "Aprobado").*/

  let calcularPromedio = () => {
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    let promedio = (nota1 + nota2 + nota3) / 3;
  
    if (promedio <= 6) {
      console.log("Suspendido");
      console.log(promedio);
      document.writeln(`Tu prmedio es ${promedio} estas Suspendido`);
    } else if (promedio >= 7) {
      console.log("Aprobado");
      console.log(promedio);
      document.writeln(`Tu prmedio es ${promedio} estas Aprobado`);
    }
  };
  
  calcularPromedio(); 
  
  /*Crea una función que a partir del precio de un producto 
  calcule el precio total (precio+iva). */

  let calcularPrecioTotal = () => {
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
    let iva = precioProducto * 0.12;
    let precioTotal = precioProducto + iva;
  
    console.log(`El precio total con IVA es: ${precioTotal.toFixed(2)}`);
    document.writeln(`El precio total con IVA es: ${precioTotal.toFixed(2)}`);
  };
  
  calcularPrecioTotal();
  
  /*Realizar un programa para una concesionaria de autos: 
  Si el auto a la venta es un ford fiesta, el descuento es de un 5%. 
  Si el coche a la venta es un ford focus, el descuento es del 10%. 
  El usuario introduce el artículo (o su código) y el programa muestra 
  el descuento correspondiente por pantalla. Utilizar funciones. */

  let aplicarDescuento = (modelo) => {
    let descuentos = {
      'ford fiesta': 5,
      'ford focus': 10
    };
    return descuentos[modelo.toLowerCase()] || 0;
  };
  
  let mostrarDescuento = () => {
    let modelo = prompt("Introduce el modelo o código del coche:");
    let descuento = aplicarDescuento(modelo);
    if (descuento > 0) {
      console.log(`El descuento para el ${modelo} es del ${descuento}%.`);
      document.writeln(`El descuento para el ${modelo} es del ${descuento}%.`);
    } else {
      console.log(`No hay descuento disponible para el modelo ${modelo}.`);
      document.writeln(`No hay descuento disponible para el modelo ${modelo}.`);
    }
  };
  
  mostrarDescuento();
  