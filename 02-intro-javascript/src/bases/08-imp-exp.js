import heroes, { owners } from "../data/heroes"; // Importación por defecto e individuales que se encuentran dentro de heroes.js
//import {heroes,  owners } from "./data/heroes"; // desestructurando las exportaciónes por defecto
console.log(owners);


const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroesById(4));


const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );
console.log(getHeroesByOwner('DC'));
