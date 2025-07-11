
document.addEventListener('DOMContentLoaded', function(){
let contenedor = document.getElementById('contendedor-principal');  

//creo tres variables donde me guardo el evento cuando tocan en cada enlace.
let pagos = document.getElementById('pagos');
let envios = document.getElementById('envios');
let nosotros = document.getElementById('nosotros');

if (pagos){
    pagos.addEventListener('click', fPagos);
}
if(envios){
    envios.addEventListener('click', fEnvios);
}
if(nosotros){
    nosotros.addEventListener('click', fNosotros);
}

//Creo una funcion que lo que hace es agregar el div en el centro del contenedor-principal
function fPagos(event){
    event.preventDefault();
    //creo un while para eliminar todos los divs que estan dentro de contenedor-principal, 
    // asi despues agrego el div con el mensaje.
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
    console.log("Vaciamos div *contenedor-flex. ");

    let divJs = document.createElement('div');
    divJs.className = 'divJs';
    divJs.innerHTML = `
            <h2>-FORMAS DE PAGOS-</h2>
            <p id="contJs">EFECTIVO | DEBITO | CREDITO | TRANSFERENCIA.</p>
            <h3>Opciones de Envío:</h3>
            <ul>
                <li id="contJs">CUOTAS: 3 y 6 S/I.</li>
                <li id="contJs">TRANSFERENCIA 10%OFF.</li>
                <li id="contJs">+$200 MIL, 12 C/I.</li>
            </ul>
            <p id="contJs">SI PAGA CON TRANSFERENCIA, SOLICITAR DATOS PARA LA MISMA UNA VEZ REALIZADO EL PEDIDO.</p>
            `;
 contenedor.appendChild(divJs);
}

function fEnvios(event){
    event.preventDefault();
    //creo un while para eliminar todos los divs que estan dentro de contenedor-principal, 
    // asi despues agrego el div con el mensaje.
    while(contenedor.firstChild){
    contenedor.removeChild(contenedor.firstChild);
}
    console.log("Vaciamos div *contenedor-flex. ");
    let divJs = document.createElement('div');
    divJs.className = 'divJs';
    divJs.innerHTML = `
            <h2>-----ENVIOS.-----</h2>
            <p>ENVIOS A TODO EL PAIS Y EL EXTERIOR VIA COURIER.</p>
            <h3>OPCIONES DE ENVIO:</h3>
            <ul>
                <li>ENVIO POR CORREO (Tiempo previsto: 3-7 días hábiles)</li>
                <li>RETIRO EN PUNTO DE ENTREGA, HASTA 2 DIAS HABILES.</li>
                <li>RETIRA GRATIS POR NUESTRA SUCURSAL DE J.L.SUAREZ</li>
            </ul>
            <p>Los costos de envío se calcularán al finalizar tu compra.</p>
        `;
 contenedor.appendChild(divJs);
}

function fNosotros(event){
    event.preventDefault();
    //creo un while para eliminar todos los divs que estan dentro de contenedor-principal, 
    // asi despues agrego el div con el mensaje.
    while(contenedor.firstChild){
    contenedor.removeChild(contenedor.firstChild);
    }
    console.log("Vaciamos div *contenedor-flex. ");
    let divJs = document.createElement('div');
    divJs.className = 'divJs';
    divJs.innerHTML = `
            <h2>-----NOSOTROS-----</h2>
            <p>TIENDA ONLINE DE ÁRTICULOS MATEROS PARA TODOS LOS GUSTOS.</p>
            <h3>DESDE EL 2020 CEBANDO MATES</h3>
            <ul>
                <li>SOMOS UN EMPRENDIMIENTO QUE ARRANCÓ DE A POCO,</li>
                <li>LA RESPONSABILIDAD CON LOS CLIENTES ES LO QUE NOS CARACTERIZA.</li>
                <li>NUESTRO OBJETIVO ES PODES LLEGAR A TODOS LOS ARGENTINOS Y AL EXTERIOR.</li>
            </ul>
            <p>PARA NOSOTROS ES IMPORTANTE EL FEEDBACK CON LOS CLIENTES, POR ESO SI NECESITAS CONSULTAR ALGO,
            ANDA A NUESTRA SECCION CONTACTO Y LLENA EL FORMULARIO.</p>
            `;
 contenedor.appendChild(divJs)
}

//-------------------------------------#######Formulario###########################################

    //document.addEventListener('DOMContentLoaded', function() {
    //me traigo el formulario a traves del ID.
    let form = document.getElementById('div-form');
    //creo un event listener para el evento submit del formulario
    form.addEventListener('submit', function(evtn) {
        evtn.preventDefault(); // Detenemos el envío real del formulario (para evitar que te lleve a formspree.io o recargue la página)

        //Me traigo todas las variables.
        let nombreForm = document.getElementById('nombre').value;
        let apellioForm = document.getElementById('apellido').value;
        let emailClient = document.getElementById('email').value;
        let mailTo = "gera_central@hotmail.com"; // Asegúrate de que este email sea el correcto
        let producto = document.getElementById('producto').value;
        
        if(nombreForm.trim() ==='' || apellioForm.trim() === '' || emailClient.trim() === ''){

            let mensaje = crearDiv();  
            mensaje.innerHTML = '<h1>ERROR AL ENVIAR EL FORMULARIO!!!!!</h1>'+
                                '<h1>DEBE COMPLETAR TODOS LOS CAMPOS PARA PODER ENVIARLO.</h1>';
                        
            //me traigo el contenido de div-form donde esta el formulario y luego guardo en una variable el formulario actual.
            let divForm = document.getElementById('div-form');
             
            let formActual = divForm.querySelector('.item-form');
            if (formActual) { 
                formActual.replaceWith(mensaje);
            } else {
                // Si por alguna razón el formulario no se encuentra, añadimos el mensaje al divForm
                divForm.appendChild(mensaje);
        }
             
        } else {
            let mensaje = crearDiv();
            mensaje.innerHTML = '<h1>Formulario Enviado con Éxito!!!!!</h1>' +
                               '<p>' + nombreForm + ' ' + apellioForm + ', ' +
                               'la consulta sobre la categoría: <b>' + producto + '</b>, se envió correctamente.</p>' +
                               '<p>La misma se envió al correo: <b>' + mailTo + '</b> y responderemos al correo: <b>' + emailClient + '</b>. Muchas Gracias.</p>';
             
            //me traigo el contenido de div-form donde esta el formulario y luego guardo en una variable el formulario actual.
            let divForm = document.getElementById('div-form');
             
            let formActual = divForm.querySelector('.item-form');
            if (formActual) { 
                formActual.replaceWith(mensaje);
            } else {
                // Si por alguna razón el formulario no se encuentra, añadimos el mensaje al divForm
                divForm.appendChild(mensaje);
            }
        }
    });

    function crearDiv(){
     //Oculto el título y el formulario, pero primero verifico si esta.
    let titForm = document.getElementById('titForm');
    if (titForm) { 
        titForm.remove();
    }
    
    // Creamos el nuevo div para el mensaje de éxito
    let divMensaje = document.createElement('div');
    divMensaje.className = 'item-form'; //le asigno la misma clase para mantener estilos de item-form.
    //aca le asigno algunos style que quiero para este mensaje en particular.
    divMensaje.style.fontSize = '20px';
    divMensaje.style.fontFamily = 'verdana';
    divMensaje.style.marginTop = '25px';
    divMensaje.style.textAlign = 'center'; 
    divMensaje.style.color = 'green'; 
    return divMensaje;
}
});

//**************************Calendario Landing -------------------------/

let mesNom = document.getElementById("month-name");
let diaNom = document.getElementById("day-name");
let numDia = document.getElementById("day-number");
let year = document.getElementById("year");

let fecha = new Date();
let mes = fecha.getMonth();
mesNom.innerText = fecha.toLocaleString("es", {
  mes: "",
});

diaNom.innerText = fecha.toLocaleString("es", {
  weekday: "long",
});

numDia.innerText = fecha.getDate();

year.innerText = fecha.getFullYear();

