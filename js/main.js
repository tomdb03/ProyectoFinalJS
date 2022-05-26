class Pelicula {
    constructor(id, imagenSrc, imagenAlt, nombre, genero, anio, precio) {
        this.id = id;
        this.imagenSrc = imagenSrc;
        this.imagenAlt = imagenAlt;
        this.nombre = nombre;
        this.genero = genero;
        this.anio = anio;
        this.precio = precio;
        this.vendido = false;
    }
    vender() {
        this.vendido = true;
    }
}

/* ABRO: COSAS VIEJAS (que me sirvieron para desafíos previos) */

// const genero = ["Acción", "Aventuras", "Ciencia Ficción", "Comedia", "Drama", "Fantasía", "Musical", "Suspense", "Terror"];

// const maxAnio = new Date().getFullYear();
// const minAnio = 1900;
// const anio = [];
// for (let i = maxAnio; i >= minAnio; i--) {
//     anio.push(i);
// }

// const precio = [95, 100, 105];

// let TheUsualSuspects = new Pelicula(1, "../images/peliculas/peli-1.jpg", "Foto de The Usual Suspects", "The Usual Suspects", genero[7], anio[27], precio[1]);
// let PulpFiction = new Pelicula(2, "../images/peliculas/peli-2.jpg", "Foto de Pulp Fiction", "Pulp Fiction", genero[0], anio[28], precio[1]);
// let ElHijoDeLaNovia = new Pelicula(3, "../images/peliculas/peli-3.jpg", "Foto de El hijo de la novia", "El hijo de la novia", genero[4], anio[21], precio[0]);
// let BigFish = new Pelicula(4, "../images/peliculas/peli-4.jpg", "Foto de Big Fish", "Big Fish", genero[5], anio[19], precio[0]);
// let LoveActually = new Pelicula(5, "../images/peliculas/peli-5.jpg", "Foto de Love Actually", "Love Actually", genero[3], anio[19], precio[0]);
// let ThereWillBeBlood = new Pelicula(6, "../images/peliculas/peli-6.jpg", "Foto de There Will Be Blood", "There Will Be Blood", genero[4], anio[15], precio[0]);
// let LaSuerteEstaEchada = new Pelicula(7, "../images/peliculas/peli-7.jpg", "Foto de La suerte está echada", "La suerte está echada", genero[3], anio[17], precio[0]);
// let Psycho = new Pelicula(8, "../images/peliculas/peli-8.jpg", "Foto de Psycho", "Psycho", genero[7], anio[62], precio[2]);
// let TheHunt = new Pelicula(9, "../images/peliculas/peli-9.jpg", "Foto de The Hunt", "The Hunt", genero[4], anio[10], precio[0]);
// let Whiplash = new Pelicula(10, "../images/peliculas/peli-10.jpg", "Foto de Whiplash", "Whiplash", genero[4], anio[8], precio[0]);
// let LaDolceVita = new Pelicula(11, "../images/peliculas/peli-11.jpg", "Foto de La dolce vita", "La dolce vita", genero[4], anio[62], precio[2]);
// let ForrestGump = new Pelicula(12, "../images/peliculas/peli-12.jpg", "Foto de Forrest Gump", "Forrest Gump", genero[4], anio[28], precio[1]);

// ForrestGump.vender();
// console.log(ForrestGump.vendido);
// ForrestGump.descuentoTransferencia();
// console.log(ForrestGump.precio);

// let arrayPeliculas = [TheUsualSuspects, PulpFiction, ElHijoDeLaNovia, BigFish, LoveActually, ThereWillBeBlood, LaSuerteEstaEchada, Psycho, TheHunt, Whiplash, LaDolceVita, ForrestGump];
// console.log("Array películas:  %O", arrayPeliculas);


// /* filtros viejos*/

// //Filtrado por precio igual a 95
// const porPrecioSiete = arrayPeliculas.filter((el) => el.precio == precio[0]);
// console.log("Precio 95:  %O", porPrecioSiete);

// //Filtrado por precio igual a 100
// const porPrecioDiez = arrayPeliculas.filter((el) => el.precio == precio[1]);
// console.log("Precio 100:  %O", porPrecioDiez);

// //Filtrado por precio igual a 105
// const porPrecioTrece = arrayPeliculas.filter((el) => el.precio == precio[2]);
// console.log("Precio 105:  %O", porPrecioTrece);

// // Filtrado por género: drama
// const porGenero = arrayPeliculas.filter((el) => el.genero == genero[4]);
// console.log("Género drama:  %O", porGenero);


// /* mostrar solo los nombres de las peliculas */
// const nombresPeliculas = arrayPeliculas.map((el) => el.nombre);
// console.log(nombresPeliculas);

/* CIERRO COSAS VIEJAS */


/* traigo datos desde el JSON (lo hago que abarque todo lo que toque películas porque requiere que se cargue al mismo tiempo si o sí, y no después) */
let arrayPeliculas = [];
jQuery.getJSON('peliculas.json', function (data) {
    jQuery.each(data, function (index, pelicula) {
        let peli = new Pelicula(pelicula.id, pelicula.imagenSrc, pelicula.imagenAlt, pelicula.nombre, pelicula.genero, pelicula.anio, pelicula.precio);
        arrayPeliculas.unshift(peli);
    });

    /* Armado dinámico de la sección de películas */
    let isPeliculas = document.getElementsByClassName('contenedorPeliculas');
    if (isPeliculas.length > 0) {
        jQuery.each(arrayPeliculas, function (index, valor) {
            let htmlPeli = `<div class="peli"><img loading="lazy" class="peliImg" src=` + valor.imagenSrc + ` alt=` + valor.imagenAlt + `><div class="peliBody"><h2 class="peliTit">` + valor.nombre + `</h2><p class="peliGenAn">` + valor.genero + ` - ` + valor.anio + `</p><div class="peliBts"><input class="peliBoton" type="button" onclick="seleccionarPelicula(` + valor.id + `)" value="Ver en el carrito"></div></div></div>`
            document.getElementById("peliculasContainer").innerHTML += htmlPeli;
        });
    }

    /* aplico operador ternario */
    totPelis = jQuery('#peliculasContainer .peli').length;
    totPelis > 9 ? jQuery('.parrafoDescriptivoPelis').append('<p>En total hay: ' + totPelis + ' películas</p>') : false;

    /* toastify para el botón de ver en el carrito */
    jQuery('.peliBoton').click(function () {
        Toastify({
            text: "¡Mirá el carrito!",
            duration: 2500,
            gravity: 'bottom',
            position: 'right',
            style: {
                background: 'linear-gradient(to right, #b9090b, #000)'
            }
            // ,
            // onClick: () => {
            //                       /* QUE SE ABRA EL CARRITO (y vaya a la parte de arriba) */
            // }
        }).showToast();
    })

    /* select del carrito */
    arrayPeliculas.forEach(function (valor) {
        let option = `<option value="` + valor.id + `">` + valor.nombre + `</option>`;
        $("#pelisSeleccionadas").append(option);
    })

});
/* cierro JSON */

/* preguntas frecuentes desplegables */
jQuery(".pregunta h3").click(function () {
    jQuery(this).siblings(".respuesta").toggle();
});

function seleccionarPelicula(peliculaId) {
    $("#pelisSeleccionadas").val(peliculaId).change();
}

/* ver carrito */
window.onload = function () {

    let body = document.getElementsByTagName('body');
    let cartRight = document.getElementById('cart');
    let botCart = document.getElementById('viewCart');
    let closeCart = document.getElementById('closeCart');
    botCart.onclick = function (e) {
        e.preventDefault();
        // e.target.classList.toggle("view-cart");
        body[0].classList.toggle("view-cart");
        // console.log("clickeron en botCart");
    }
    closeCart.onclick = function (e) {
        e.preventDefault();
        body[0].classList.toggle("view-cart");
    }
}

/* precio del carrito */
function agregarPrecio() {
    let valor = $("#pelisSeleccionadas option:selected").val();
    let encontrado = arrayPeliculas.find((pelicula) => {
        return pelicula.id == valor;
    });
    $("#precio").val(encontrado.precio);
    $("#cantidad").val("");
    $("#subtotal").val("");
}

/* calcular el subtotal a partir de la cantidad */
function calcularSubtotal() {
    let cantidad = $("#cantidad").val();
    if (cantidad > 0) {
        $("#error").html("");
        let precio = $("#precio").val();
        let subtotal = parseInt(cantidad) * parseInt(precio);
        $("#subtotal").val(subtotal);
    } else {
        $("#error").html("Debe ingresar la cantidad...");
        $("#subtotal").val("");
    }
}

/* botón confirmar compra */
function comprar() {
    if (parseInt(document.getElementById('subtotal').value) > 0) {
        $("#comprado").html("¡Tu compra se ha realizado con éxito!");
        $("#error5").html("");
    } else {
        $("#comprado").html("");
        $("#error5").html("Por favor complete bien los campos...");
    }
}

/* calculador de interés si se paga en cuotas */
function calcular() {
    let precioLista = parseInt(document.getElementById('precioLista').value);
    if (precioLista > 0) {
        $("#error2").html("");
        localStorage.setItem("precioLista", precioLista);
        let huboCuotas = document.getElementById('huboCuotas').value;
        if (huboCuotas == "si" || huboCuotas == "Si") {
            $("#error3").html("");
            let interes = parseInt(document.getElementById('interes').value);
            if (interes > 0) {
                $("#error4").html("");
                interesTot = (precioLista * interes) / 100;
                montoTot = precioLista + interesTot;
                document.getElementById("montoFinal").setAttribute('value', montoTot);
                localStorage.setItem("montoTot", montoTot);
            } else {
                $("#error4").html("Ingrese el interés correspondiente...");
            }
        } else if (huboCuotas == "no" || huboCuotas == "No") {
            $("#error3").html("");
            document.getElementById("montoFinal").setAttribute('value', precioLista);
            localStorage.setItem("montoTot", precioLista);
        } else {
            $("#error3").html("Debes ingresar si o no...");
        }
    } else {
        $("#error2").html("Falta ingresar el precio de lista total...");
    }
}

/* para ver el último monto que se calculó */
function obtenerLocalStorage() {
    if (localStorage.getItem("montoTot")) {
        let montoTotLS = localStorage.getItem("montoTot");
        document.getElementById("ultimomontoFinal").setAttribute('value', montoTotLS);
    } else {
        document.getElementById("ultimomontoFinal").setAttribute('value', "No hay nada aun");
    }
}
let isCarrito = document.getElementsByClassName('carritoContainer');
if (isCarrito.length > 0) {
    obtenerLocalStorage();
}

// /* sweet alert botón confirmar compra */
// jQuery('#btnComprar').click(function () {
//     Swal.fire({
//         title: 'Genial!',
//         text: 'Tu compra se ha realizado con éxito!',
//         icon: 'success',
//         confirmButtonText: 'Cool'
//     })
// })