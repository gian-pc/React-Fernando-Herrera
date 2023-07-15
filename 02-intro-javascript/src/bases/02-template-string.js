
const nombre = 'Gian';
const apellido = 'Paucar';

//const nombreCompleto = nombre + ' ' + apellido; // Forma normal de concatenar

const nombreCompleto = `${nombre} ${apellido}`; // Template String

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`); // Template String