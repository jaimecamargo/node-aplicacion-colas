let socket = io();

let searchParams = new URLSearchParams(window.location.search);

console.log(searchParams);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';

    throw new Error('El escritorio es necesario');
}

let escritorio = searchParams.get('escritorio');
let label = $('small');

$('h1').text('Escritorio: ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio }, function(resp) {

        if (resp === 'No hay tickets') {
            label.text(resp);
            alert(resp);
            return;
        }

        label.text('Ticket ' + resp.numero);
        console.log(resp);
    });
});
// socket.on('estadoActual', function(respuesta) {
//     label.text(respuesta.actual);
// });

// $('button').on('click', function() {
//     socket.emit('siguienteTicket', null, function(siguienteTicket) {
//         label.text(siguienteTicket);
//     });
// });