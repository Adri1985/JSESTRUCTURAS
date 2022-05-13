
let precioTotal = 0;
let precioMilanesa = 50;
let precioEmpanada = 20;
let precioCocaCola = 15;
let codigoDescuento;
let descuento = 0.1;


let pedido = prompt("Ingrese Su pedido, para finalizar, escriba 'Salir'. Tenemos Milanesa a $"+precioMilanesa+", Empanada a $"+precioEmpanada+" o CocaCola a $"+precioCocaCola+".");
while(pedido != "Salir")
{
    if(pedido == "Milanesa"){
        precioTotal+= precioMilanesa;
        alert("Se agrega 1 Milanesa, subtotal: "+precioTotal);
    }
    else if(pedido == "Empanada"){
        precioTotal+= precioEmpanada;
        alert("Se agrega 1 Empanada, subtotal: "+precioTotal);
        }
        else if (pedido == "CocaCola")
            {
                precioTotal+= precioCocaCola;
                alert("Se agrega 1 CocaCola, subtotal: "+precioTotal);
            }
            else
                {
                    alert("No contamos con ese producto");
                }

    pedido = prompt("Ingrese Su pedido, para finalizar, escriba 'Salir'. Tenemos Milanesa a $"+precioMilanesa+", Empanada a $"+precioEmpanada+" o CocaCola a $"+precioCocaCola+".");          

}


if(precioTotal >0)
{
    for(let i = 0; i<4; i++)
    {   
        codigoDescuento = prompt("Ingrese su codigo de descuento, solo tiene 3 intentos");
        {
            if(codigoDescuento == "Adri")
            {
                precioTotal = precioTotal- precioTotal*descuento;
                alert("Se aplica %10 de descuento, su total es: "+precioTotal+".");
                
                break;
            }
            else
            {
                alert("Codigo incorrecto, le quedan "+3-i+" intentos.");
            }
        }
    }
    
}
alert("Gracias por su compra");
