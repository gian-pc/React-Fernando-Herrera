
// Desestructuración

const persona = {
    nombre: 'Tonny',
    edad: 45,
    clave: 'Iroman'
}

const { nombre, edad, clave } = persona; // desestructuración

console.log(nombre);
console.log(edad);
console.log(clave);


const retornaPersona = ( { nombre, edad, rango = 'Capitán' } )=>{
    //console.log( nombre, edad, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.1232,
            lng:-12.3232
        }
    }
}

retornaPersona(persona);

const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona( persona);
console.log(nombreClave, anios);
console.log(lat, lng);