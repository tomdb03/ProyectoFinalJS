class Pelicula {
    constructor(imagenSrc, imagenAlt, nombre, genero, anio, precio) {
        this.imagenSrc = imagenSrc;
        this.imagenAlt = imagenAlt;
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

const imagenSrc = ["../images/peliculas/peli-1.jpg", "../images/peliculas/peli-2.jpg", "../images/peliculas/peli-3.jpg", "../images/peliculas/peli-4.jpg", "../images/peliculas/peli-5.jpg", "../images/peliculas/peli-6.jpg", "../images/peliculas/peli-7.jpg", "../images/peliculas/peli-8.jpg", "../images/peliculas/peli-9.jpg", "../images/peliculas/peli-10.jpg", "../images/peliculas/peli-11.jpg", "../images/peliculas/peli-12.jpg"];

const imagenAlt = ["Foto de The Usual Suspects", "Foto de Pulp Fiction", "Foto de El hijo de la novia", "Foto de Big Fish", "Foto de Love Actually", "Foto de There Will Be Blood", "Foto de La suerte está echada", "Foto de Psycho", "Foto de The Hunt", "Foto de Whiplash", "Foto de La dolce vita", "Foto de Forrest Gump"];

const genero = ["Acción", "Aventuras", "Ciencia Ficción", "Comedia", "Drama", "Fantasía", "Musical", "Suspense", "Terror"];

const maxAnio = new Date().getFullYear();
const minAnio = 1900;
const anio = [];
for (let i = maxAnio; i >= minAnio; i--) {
    anio.push(i);
}

const precio = [95, 100, 105];


let TheUsualSuspects = new Pelicula(imagenSrc[0], imagenAlt[0], "The Usual Suspects", genero[7], anio[27], precio[1]);
let PulpFiction = new Pelicula(imagenSrc[1], imagenAlt[1], "Pulp Fiction", genero[0], anio[28], precio[1]);
let ElHijoDeLaNovia = new Pelicula(imagenSrc[2], imagenAlt[2], "El hijo de la novia", genero[4], anio[21], precio[0]);
let BigFish = new Pelicula(imagenSrc[3], imagenAlt[3], "Big Fish", genero[5], anio[19], precio[0]);
let LoveActually = new Pelicula(imagenSrc[4], imagenAlt[4], "Love Actually", genero[3], anio[19], precio[0]);
let ThereWillBeBlood = new Pelicula(imagenSrc[5], imagenAlt[5], "There Will Be Blood", genero[4], anio[15], precio[0]);
let LaSuerteEstaEchada = new Pelicula(imagenSrc[6], imagenAlt[6], "La suerte está echada", genero[3], anio[17], precio[0]);
let Psycho = new Pelicula(imagenSrc[7], imagenAlt[7], "Psycho", genero[7], anio[62], precio[2]);
let TheHunt = new Pelicula(imagenSrc[8], imagenAlt[8], "The Hunt", genero[4], anio[10], precio[0]);
let Whiplash = new Pelicula(imagenSrc[9], imagenAlt[9], "Whiplash", genero[4], anio[8], precio[0]);
let LaDolceVita = new Pelicula(imagenSrc[10], imagenAlt[10], "La dolce vita", genero[4], anio[62], precio[2]);
let ForrestGump = new Pelicula(imagenSrc[11], imagenAlt[11], "Forrest Gump", genero[4], anio[28], precio[1]);

ForrestGump.vender();
console.log(ForrestGump.vendido);
ForrestGump.descuentoTransferencia();
console.log(ForrestGump.precio);


let arrayPeliculas = [TheUsualSuspects, PulpFiction, ElHijoDeLaNovia, BigFish, LoveActually, ThereWillBeBlood, LaSuerteEstaEchada, Psycho, TheHunt, Whiplash, LaDolceVita, ForrestGump];
console.log("Array películas:  %O", arrayPeliculas);


/* Armado dinámico de la sección de películas */
arrayPeliculas.forEach(function (valor) {
    let htmlPeli = `<div class="peli"><img loading="lazy" class="peliImg" src=` + valor.imagenSrc + ` alt=` + valor.imagenAlt + `><div class="peliBody"><h2 class="peliTit">` + valor.nombre + `</h2><p class="peliGenAn">` + valor.genero + ` - ` + valor.anio + `</p><div class="peliBts"><input onclick="aggCarrito()" class="peliBoton" type="button" value="Agregar al carrito"></div></div></div>`
    console.log('Salida del html armado dinámico:' + htmlPeli);
    document.getElementById("peliculasContainer").innerHTML += htmlPeli;
});




/* filtros */
/* falta select para ver cual elegir */
/* tengo que hacer que sirva para todos, cómo? */


//Filtrado por precio igual a 95
const porPrecioSiete = arrayPeliculas.filter((el) => el.precio == precio[0]);
console.log("Precio 95:  %O", porPrecioSiete);

//Filtrado por precio igual a 100
const porPrecioDiez = arrayPeliculas.filter((el) => el.precio == precio[1]);
console.log("Precio 100:  %O", porPrecioDiez);

//Filtrado por precio igual a 105
const porPrecioTrece = arrayPeliculas.filter((el) => el.precio == precio[2]);
console.log("Precio 105:  %O", porPrecioTrece);


/* tengo que hacer que sirva para todos, cómo? */
const porGenero = arrayPeliculas.filter((el) => el.genero == genero[4]);
console.log("Género drama:  %O", porGenero);




/* ordenar */
/* falta que se pueda ordenar al revés */


// arrayPeliculas.sort((a, b) => {
//     return a.nombre.localeCompare(b.nombre);
// })
// console.log("Ordenado alfabéticamente:  %O",arrayPeliculas);


// arrayPeliculas.sort((a, b) => {
//     if (a.genero > b.genero){
//         return 1;
//     }
//     if (a.genero < b.genero){
//         return -1;
//     }
//     return 0;
// })
// console.log(arrayPeliculas);

// arrayPeliculas.sort((a, b) => {
//     if (a.anio > b.anio){
//         return 1;
//     }
//     if (a.anio < b.anio){
//         return -1;
//     }
//     return 0;
// })
// console.log("Ordenado por año, de viejas a nuevas:  %O",arrayPeliculas);


// ordeno por precio
arrayPeliculas.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;
    }
    return 0;
})
console.log("Ordenado por precio, de bajos a altos:  %O", arrayPeliculas);




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



/* método reduce de array para calcular */



// function calcular() {
//     /* ADAPTAR BIEN A LA PÁGINA DE PELÍCULAS */
//     let precioLista = parseInt(prompt("Ingrese el precio de lista total"));
//     if (precioLista > 0) {
//         let huboDemora = prompt("¿Tuviste días de demora para devolver la película? ¿Si o no?");
//         if (huboDemora == "si" || huboDemora == "Si") {
//             let demora = parseInt(prompt("Ingrese los días que tardaste demás en devolver la película"));
//             let interes = parseInt(prompt("Ingrese el interés en porcentaje"));
//             let demoraContador = 1;
//             for (i = 1; i <= demora; i++) {
//                 precioLInd = precioLista / demora;
//                 interesInd = ((precioLista * interes) / 100) / demora;
//                 montoInd = precioLInd + interesInd;
//                 // console.log("El precio de lista del día " + demoraContador + " es de " + precioLInd);
//                 console.log("El interés del día de demora " + demoraContador + " es de " + interesInd);
//                 // console.log("El importe del día de demora " + demoraContador + " es de " + montoInd);
//                 // console.log("\n");
//                 demoraContador = demoraContador + 1;
//             }
//             interesTot = interesInd * demora;
//             montoTot = montoInd * demora;
//             console.log("El precio de lista total es de " + precioLista);
//             console.log("El interés total es de " + interesTot);
//             console.log("El importe final es de " + montoTot);
//         } else if (huboDemora == "no" || huboDemora == "No") {
//             alert("El total a pagar es: " + precioLista);
//         } else {
//             alert("Debes ingresar si o no");
//         }
//     } else {
//         alert("Falta ingresar el precio de lista total");
//     }
// }
// calcular();


/* Me falta para la próxima entrega sincronizar ambas cosas (el descuento por transferencia por ejemplo), aunque no se me ocurre muy bien cómo */




/* lista de solo los nombres de las películas */

let peliculas = document.getElementsByClassName("peliTit");
for (pelicula of peliculas) {
    console.log("Solo nombre:  %O", pelicula.innerHTML)
}





/* click en agregar al carrito */

function aggCarrito() {
    alert("Agregado al carrito");
}

/* no anda porque el jQuery se hace aparte */
// $(".peliBoton").click(function(){
//     alert("Agregado al carrito.");
// });