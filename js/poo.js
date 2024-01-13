//PROGRANACION ORIENTADA A OBJETOS
class Persona{
    constructor(nombre, edad){
        this._nombre=nombre;
        this._edad=24;
    }

    saludar(){
        return`Hola soy ${this._nombre} y tengo ${this._edad} años`;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre=nuevoNombre;
    }
}

let persona1=new Persona("Teresa",25);
let persona2=new Persona("Rafael",23);

console.log(persona1);
console.log(persona2);
console.log(persona1.saludar());

//SUBCLASES
class Alumno extends Persona{
    constructor(nombre, edad, promedio){
        super(nombre, edad);
        this._promedio=promedio;
    }

    get promedio(){
        return this._promedio;
    }
    set promedio(nuevoPromedio){
        this._promedio=nuevoPromedio;
    }
        estudiar(){
            return `Soy estudiante de la carrera DS`
        }
}

let alumno1=new Alumno("Tomas", 24, 9.50);
console.log(alumno1);
console.log(alumno1.estudiar());
