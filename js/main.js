function calcular() {
    // ¿Tendría que poner parámetros?
    let precioLista = parseInt(prompt("Ingrese el precio de lista total"));
    if (precioLista > 0) {
        let cuotas = parseInt(prompt("Ingrese las cuotas en las que vas a pagar"));
        let interes = parseInt(prompt("Ingrese el interés en porcentaje"));
        let cuotaContador = 1;
        for (i = 1; i <= cuotas; i++) {
            precioLInd = precioLista / cuotas;
            interesInd = ((precioLista * interes) / 100) / cuotas;
            montoInd = precioLInd + interesInd;
            console.log("El precio de lista de la cuota " + cuotaContador + " es de " + precioLInd);
            console.log("El interés de la cuota " + cuotaContador + " es de " + interesInd);
            console.log("El importe de la cuota " + cuotaContador + " es de " + montoInd);
            console.log("\n");
            cuotaContador = cuotaContador + 1;
        }
        interesTot = interesInd * cuotas;
        montoTot = montoInd * cuotas;
        console.log("El precio de lista total es de " + precioLista);
        console.log("El interés total es de " + interesTot);
        console.log("El importe final es de " + montoTot);
    } else {
        alert("Falta ingresar el precio de lista total");
    }
}

calcular();