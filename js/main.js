class Pelicula {
    constructor(nombre, genero, anio, precio) {
        this.nombre = nombre;
        this.genero = genero;
        this.anio = anio;
        this.precio = precio;
        this.vendido = false;
    }
    descuentoTransferencia() {
        this.precio = this.precio * 0.80;
    }
    vender() {
        this.vendido = true;
    }
}

const genero = ["Acción", "Aventuras", "Ciencia Ficción", "Comedia", "Drama", "Fantasía", "Musical", "Suspense", "Terror"];

const maxAnio = new Date().getFullYear();
const minAnio = 1900;
const anio = [];
for (let i = maxAnio; i >= minAnio; i--) {
    anio.push(i);
}

const precio = [95, 100, 105];


const TheUsualSuspects = new Pelicula("The Usual Suspects", genero[7], anio[27], precio[1]);
const PulpFiction = new Pelicula("Pulp Fiction", genero[0], anio[28], precio[1]);
const ElHijoDeLaNovia = new Pelicula("El hijo de la novia", genero[4], anio[21], precio[0]);
const BigFish = new Pelicula("Big Fish", genero[5], anio[19], precio[0]);
const LoveActually = new Pelicula("Love Actually", genero[3], anio[19], precio[0]);
const ThereWillBeBlood = new Pelicula("There Will Be Blood", genero[4], anio[15], precio[0]);
const LaSuerteEstaEchada = new Pelicula("La suerte está echada", genero[3], anio[17], precio[0]);
const Psycho = new Pelicula("Psycho", genero[7], anio[62], precio[2]);
const TheHunt = new Pelicula("The Hunt", genero[4], anio[10], precio[0]);
const Whiplash = new Pelicula("Whiplash", genero[4], anio[8], precio[0]);
const LaDolceVita = new Pelicula("La dolce vita", genero[4], anio[62], precio[2]);
const ForrestGump = new Pelicula("Forrest Gump", genero[4], anio[28], precio[1]);



const arrayPeliculas = [TheUsualSuspects, PulpFiction, ElHijoDeLaNovia, BigFish, LoveActually, ThereWillBeBlood, LaSuerteEstaEchada, Psycho, TheHunt, Whiplash, LaDolceVita, ForrestGump];
console.log(arrayPeliculas);




/* filtros */           /* falta select para ver cual elegir */ /* tengo que hacer que sirva para todos, cómo? */

const porPrecioSiete = arrayPeliculas.filter((el) => el.precio == precio[0]);
console.log(porPrecioSiete);

const porPrecioDiez = arrayPeliculas.filter((el) => el.precio == precio[1]);
console.log(porPrecioDiez);

const porPrecioTrece = arrayPeliculas.filter((el) => el.precio == precio[2]);
console.log(porPrecioTrece);


/* tengo que hacer que sirva para todos, cómo? */
const porGenero = arrayPeliculas.filter((el) => el.genero == genero[0]);
console.log(porGenero);




/* ordenar */       /* falta que se pueda ordenar al revés */

arrayPeliculas.sort((a, b) => {
    if (a.nombre > b.nombre){
        return 1;
    }
    if (a.nombre < b.nombre){
        return -1;
    }
    return 0;
})
console.log(arrayPeliculas);

arrayPeliculas.sort((a, b) => {
    if (a.genero > b.genero){
        return 1;
    }
    if (a.genero < b.genero){
        return -1;
    }
    return 0;
})
console.log(arrayPeliculas);

arrayPeliculas.sort((a, b) => {
    if (a.anio > b.anio){
        return 1;
    }
    if (a.anio < b.anio){
        return -1;
    }
    return 0;
})
console.log(arrayPeliculas);

arrayPeliculas.sort((a, b) => {
    if (a.precio > b.precio){
        return 1;
    }
    if (a.precio < b.precio){
        return -1;
    }
    return 0;
})
console.log(arrayPeliculas);




/* para el descuento en mi compra */

// let cupon = 0.80;
// const miCompra = [

// ]
// const precioFinalDescuento = miCompra.reduce( (acc, el) => acc + el.precio * cupon);    /* está un poco mal */




/* tengo que hacer que el precio de lista sea una sumatoria de los precios de las películas seleccionadas (algo así:)*/

// function sumarPeliculas(primerPeli, ultimaPeli) {
//     let total = 0;
//     for (let i = primerPeli; i <= ultimaPeli; i++) {
//         total += i;
//     }
//     return (total);
// }
// console.log(sumarPeliculas(,));





/* mostrar solo los nombres de las peliculas */

// const nombresPeliculas = arrayPeliculas.map((el) => el.nombre);
// console.log(nombresPeliculas);




/* ¿No sabés que elegir? Proba cuál te toca al azar. */

// peliAzar = () => {
//     return Math.random(arrayPeliculas);       /* por su índice abría que hacerlo */
// }
// console.log(peliAzar);          /* está mal */




// function calcular() {            /* ADAPTAR A LA PÁGINA DE PELÍCULAS */
//     let precioLista = parseInt(prompt("Ingrese el precio de lista total"));
//     if (precioLista > 0) {
//         let cuotas = parseInt(prompt("Ingrese las cuotas en las que vas a pagar"));
//         let interes = parseInt(prompt("Ingrese el interés en porcentaje"));
//         let cuotaContador = 1;
//         for (i = 1; i <= cuotas; i++) {
//             precioLInd = precioLista / cuotas;
//             interesInd = ((precioLista * interes) / 100) / cuotas;
//             montoInd = precioLInd + interesInd;
//             console.log("El precio de lista de la cuota " + cuotaContador + " es de " + precioLInd);
//             console.log("El interés de la cuota " + cuotaContador + " es de " + interesInd);
//             console.log("El importe de la cuota " + cuotaContador + " es de " + montoInd);
//             console.log("\n");
//             cuotaContador = cuotaContador + 1;
//         }
//         interesTot = interesInd * cuotas;
//         montoTot = montoInd * cuotas;
//         console.log("El precio de lista total es de " + precioLista);
//         console.log("El interés total es de " + interesTot);
//         console.log("El importe final es de " + montoTot);
//     } else {
//         alert("Falta ingresar el precio de lista total");
//     }
// }
// calcular();


/* Me falta para la próxima entrega sincronizar ambas cosas (el descuento por transferencia por ejemplo), aunque no se me ocurre muy bien cómo */




/*
let peliculas = document.getElementsByClassName("peliTit");
console.log(peliculas);
for (pelicula of peliculas) {
    console.log(pelicula.innerHTML)
};
*/


