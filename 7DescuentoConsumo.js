let consumo, total, descuento,pago, vueltas;

consumo=85000;
total=consumo;

console.log("El consumo del cliente fue "+consumo);

if(consumo>50000){
    descuento=consumo*(20/100);
    total=total-descuento;
    console.log("El descuento fue de: "+descuento);
    console.log("El Total a pagar es de: "+total);
    pago=80000;
    console.log("Se recibe pago por: "+pago)
    vueltas=pago-total
    console.log("Se devuelve: "+vueltas)
}else{
    console.log("No se aplica descuento monto menor a 50.000")
    pago=consumo+10000;
    console.log("Se recibe pago por: "+pago);
    vueltas=pago-consumo;
    console.log("Se devuelve: "+vueltas);
}
console.log("Se recibe pago por: "+pago)
    vueltas=pago-total
    console.log("Gracias por su compra!")
