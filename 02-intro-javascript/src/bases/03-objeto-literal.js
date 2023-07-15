
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 11368,
        lat: 14.3232,
        lng: 34.9233321
    }

};

console.log({persona});
//console.table(persona);

// Haciendo un clon del Objeto persona con el operador spread (...)
const persona2 = {...persona}; 
persona2.nombre = 'Peter'; // Cambiando de nombre al Objeto persona2

console.log({persona2});