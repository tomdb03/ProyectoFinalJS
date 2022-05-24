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


let TheUsualSuspects = new Pelicula(1, "../images/peliculas/peli-1.jpg", "Foto de The Usual Suspects", "The Usual Suspects", genero[7], anio[27], precio[1]);
let PulpFiction = new Pelicula(2, "../images/peliculas/peli-2.jpg", "Foto de Pulp Fiction", "Pulp Fiction", genero[0], anio[28], precio[1]);
let ElHijoDeLaNovia = new Pelicula(3, "../images/peliculas/peli-3.jpg", "Foto de El hijo de la novia", "El hijo de la novia", genero[4], anio[21], precio[0]);
let BigFish = new Pelicula(4, "../images/peliculas/peli-4.jpg", "Foto de Big Fish", "Big Fish", genero[5], anio[19], precio[0]);
let LoveActually = new Pelicula(5, "../images/peliculas/peli-5.jpg", "Foto de Love Actually", "Love Actually", genero[3], anio[19], precio[0]);
let ThereWillBeBlood = new Pelicula(6, "../images/peliculas/peli-6.jpg", "Foto de There Will Be Blood", "There Will Be Blood", genero[4], anio[15], precio[0]);
let LaSuerteEstaEchada = new Pelicula(7, "../images/peliculas/peli-7.jpg", "Foto de La suerte está echada", "La suerte está echada", genero[3], anio[17], precio[0]);
let Psycho = new Pelicula(8, "../images/peliculas/peli-8.jpg", "Foto de Psycho", "Psycho", genero[7], anio[62], precio[2]);
let TheHunt = new Pelicula(9, "../images/peliculas/peli-9.jpg", "Foto de The Hunt", "The Hunt", genero[4], anio[10], precio[0]);
let Whiplash = new Pelicula(10, "../images/peliculas/peli-10.jpg", "Foto de Whiplash", "Whiplash", genero[4], anio[8], precio[0]);
let LaDolceVita = new Pelicula(11, "../images/peliculas/peli-11.jpg", "Foto de La dolce vita", "La dolce vita", genero[4], anio[62], precio[2]);
let ForrestGump = new Pelicula(12, "../images/peliculas/peli-12.jpg", "Foto de Forrest Gump", "Forrest Gump", genero[4], anio[28], precio[1]);

// ForrestGump.vender();
// console.log(ForrestGump.vendido);
// ForrestGump.descuentoTransferencia();
// console.log(ForrestGump.precio);


let arrayPeliculas = [TheUsualSuspects, PulpFiction, ElHijoDeLaNovia, BigFish, LoveActually, ThereWillBeBlood, LaSuerteEstaEchada, Psycho, TheHunt, Whiplash, LaDolceVita, ForrestGump];
console.log("Array películas:  %O", arrayPeliculas);


/* Armado dinámico de la sección de películas */
let isPeliculas = document.getElementsByClassName('contenedorPeliculas');
if (isPeliculas.length > 0) {
    // elements with class "snake--mobile" exist
    arrayPeliculas.forEach(function (valor) {
        let htmlPeli = `<div class="peli"><img loading="lazy" class="peliImg" src=` + valor.imagenSrc + ` alt=` + valor.imagenAlt + `><div class="peliBody"><h2 class="peliTit">` + valor.nombre + `</h2><p class="peliGenAn">` + valor.genero + ` - ` + valor.anio + `</p><div class="peliBts"><input class="peliBoton" type="button" onclick="seleccionarPelicula(` + valor.id + `)" value="Agregar al carrito"></div></div></div>`
        // console.log('Salida del html armado dinámico:' + htmlPeli);
        document.getElementById("peliculasContainer").innerHTML += htmlPeli;
    });
}

function seleccionarPelicula(peliculaId) {
    let posicion = $("#cliente").offset().top;
    $("html, body").animate({
        scrollTop: posicion
    }, 1000);
    $("#pelisSeleccionadas").val(peliculaId).change();
}




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


/* método reduce de array para calcular */



function calcular2() {
    let precioLista = parseInt(document.getElementById('precioLista').value);
    if (precioLista > 0) {
        localStorage.setItem("precioLista", precioLista);
        let huboCuotas = document.getElementById('huboCuotas').value;
        if (huboCuotas == "si" || huboCuotas == "Si") {
            let interes = parseInt(document.getElementById('interes').value);
            interesTot = (precioLista * interes) / 100;
            montoTot = precioLista + interesTot;
            document.getElementById("montoFinal").setAttribute('value', montoTot);
            localStorage.setItem("montoTot", montoTot);

        } else if (huboCuotas == "no" || huboCuotas == "No") {
            document.getElementById("montoFinal").setAttribute('value', precioLista);
            localStorage.setItem("montoTot", precioLista);
        } else {
            alert("Debes ingresar si o no");
        }
    } else {
        alert("Falta ingresar el precio de lista total");
    }
}

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







/* lista de solo los nombres de las películas */

// let peliculas = document.getElementsByClassName("peliTit");
// for (pelicula of peliculas) {
//     console.log("Solo nombre:  %O", pelicula.innerHTML)
// }





// //CODIGO HTML DE REFERENCIA
// <form id="formulario">
// <input type="text">
// <input type="number">
// <input type="submit" value="Enviar">
// </form>

// //CODIGO JS
// let miFormulario      = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
// //Cancelamos el comportamiento del evento
// e.preventDefault();
// //Obtenemos el elemento desde el cual se disparó el evento
// let formulario = e.target
// //Obtengo el valor del primero hijo <input type="text">
// console.log(formulario.children[0].value); 
// //Obtengo el valor del segundo hijo <input type="number"> 
// console.log(formulario.children[1].value);  
// }



/* local storage */

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// //Almacenar producto por producto
// for (const pelicula of arrayPeliculas) {
//     guardarLocal(pelicula.nombre, JSON.stringify(pelicula));
// }
// // o almacenar array completo
// guardarLocal("listaPeliculas", JSON.stringify(arrayPeliculas));




/* tengo que armar la función para carrito*/

const carrito = [];


let carritoVacio = function () {
    console.log("El carrito está vacío");
}
carrito.length === 0 && carritoVacio();


let carritoLS = JSON.parse(localStorage.getItem('carrito')) || [];



totPelis = jQuery('#peliculasContainer .peli').length;
totPelis > 9 ? jQuery('.parrafoDescriptivoPelis').append('<p>En total hay: ' + totPelis + ' películas</p>') : false;



/* preguntas desplegables */
jQuery(".pregunta h3").click(function () {
    jQuery(this).siblings(".respuesta").toggle();
});



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


/* sweet alert */
jQuery('#limpiarBtn').click(function () {
    Swal.fire({
        title: 'Está seguro de limpiar este cálculo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                text: 'El cálculo ha sido borrado'
            })
        }
    })
})

jQuery('#btnComprar').click(function () {
    Swal.fire({
        title: 'Genial!',
        text: 'Tu compra se ha realizado con éxito!',
        icon: 'success',
        confirmButtonText: 'Cool'
    })
})


/* toastify */
jQuery('.peliBoton').click(function () {
    Toastify({
        text: "¡Agregado al carrito!",
        duration: 2500,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: 'linear-gradient(to right, #b9090b, #000)'
        }
        // ,
        // onClick: () => {
        //     /* QUE SE ABRA EL CARRITO */
        // }
    }).showToast();
})


/* select del carrito */
function cargarSelect(pelicula) {
    var option = `<option value="${pelicula.id}">${pelicula.nombre}</option>`;
    $("#pelisSeleccionadas").append(option);
}
arrayPeliculas.forEach(function (valor) {
    let option = `<option value="` + valor.id + `">` + valor.nombre + `</option>`;
    $("#pelisSeleccionadas").append(option);
})

/* precio del carrito */
function agregarPrecio() {
    var valor = $("#pelisSeleccionadas option:selected").val();
    var encontrado = arrayPeliculas.find((pelicula) => {
        return pelicula.id == valor;
    });
    $("#precio").val(encontrado.precio);
    $("#cantidad").val("");
    $("#subtotal").val("");
}




/*  */

function agregarProducto() {
    var cantidad = parseInt($("#cantidad").val());
    if (cantidad > 0) {
      $("#error").html("");
      var itemId = parseInt($("#brebajes").val());
  
      var indiceYaExiste = pedido.items.findIndex((item) => {
        return item.itemId == itemId;
      });
      if (indiceYaExiste == -1) {
        pedido.items.push({ itemId, cantidad });
      } else {
        pedido.items[indiceYaExiste].cantidad += cantidad;
      }
      $("#cantidad").val("");
      $("#subtotal").val("");
      dibujarPedido();
    } else {
      $("#error").html("Debe ingresar cantidad");
    }
  }
  
  function dibujarPedido() {
    var tablaHeader = `<table class="table table-hover table-dark finalizar-pedido">
    <thead>
      <tr class="items">
        <th scope="col">#</th>
        <th scope="col">Producto</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Precio</th>
        <th scope="col">Subtotal</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>`;
    var tablaBody = "";
    var total = 0;
    var iconoEliminar = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>`;
    pedido.items.forEach((item, indice) => {
      var articulo = articulos.find((articulo) => {
        return item.itemId == articulo.id;
      });
      tablaBody += `<tr>
        <th scope="row">${indice + 1}</th>
        <td>${articulo.nombre}</td>
        <td>$${articulo.precio}</td>
        <td>${item.cantidad}</td>
        <td>$${parseInt(item.cantidad) * parseInt(articulo.precio)}</td>
        <td><span class="icono-eliminar" onclick="eliminarItem(${indice})">${iconoEliminar}</span></td>
      </tr>`;
      total += parseInt(item.cantidad) * parseInt(articulo.precio);
    });
    var tablaFooter = `<tr>
      <td colspan="3"></td>
      <td class="total">TOTAL</td>
      <td class="monto">$${total}</td>
      <td></td>
    </tr>
    </tbody>
    </table>`;
    var formCliente = `<div class="row">
        <div class="col-sm column-1">
          Nombre y Apellido:
        </div>
        <div class="col-sm column-2">
          <input class="field" type="text" name="name" id="name">
        </div>
      </div>
      <div class="row">
        <div class="col-sm column-1">
          Telefono:
        </div>
        <div class="col-sm column-2">
          <input class="field" type="text" name="phone" id="phone" >
        </div>
      </div>
      <div class="row">
        <div class="col-sm column-1">
          Dirección:
        </div>
        <div class="col-sm column-2">
          <input class="field" type="text" name="adress" id="adress">
        </div>
      </div>
      <div class="row" >
        <div class="col-sm column-1">
        </div>
        <div class="col-sm column-2">
          <div class="error" id="error-cliente"></div>
          <button class="finalizar" onclick="finalizarPedido()">FINALIZAR PEDIDO</button>
        </div>
      </div>`;
    if (pedido.items.length) {
      $("#pedido-final").html(tablaHeader + tablaBody + tablaFooter);
      if ($("#form-cliente").html() === "") {
        $("#form-cliente").html(formCliente);
      }
    } else {
      $("#pedido-final").html("");
      $("#form-cliente").html("");
    }
  }
  
  function eliminarItem(indice) {
    pedido.items.splice(indice, 1);
    dibujarPedido();
  }
  