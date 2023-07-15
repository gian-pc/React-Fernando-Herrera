// Desestructuración de arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];

const [p1] = personajes;
const [, , p3] = personajes;

console.log(p1);
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


// Tarea
const retornaNombre = (valor) => {
    return [ valor, ()=>{ console.log('Hola Mundo')}];
};

const [nombre, setNombre] = retornaNombre('Goku'); // desestructuración

console.log(nombre);
setNombre();
