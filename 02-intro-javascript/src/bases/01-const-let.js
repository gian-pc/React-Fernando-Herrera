
// Variables y Constantes

const nombre = 'Gian';
const apellido = 'Paucar';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// Scope con la variable valorDado
if(true){
    const nombre = 'Peter';
    let valorDado = 6;
    console.log(valorDado);
    console.log(nombre);
}

console.log(valorDado);