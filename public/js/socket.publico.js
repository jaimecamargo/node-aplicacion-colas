// establecer conexión
let socket = io();

let lblTicket1 = $("#lblTicket1");
let lblEscritorio1 = $("#lblEscritorio1");

let lblTicket2 = $("#lblTicket2");
let lblEscritorio2 = $("#lblEscritorio2");

let lblTicket3 = $("#lblTicket3");
let lblEscritorio3 = $("#lblEscritorio3");

let lblTicket4 = $("#lblTicket4");
let lblEscritorio4 = $("#lblEscritorio4");

let lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
let lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

socket.on('estadoActual', function(data) {

    actualizaHtml(data.ultimos4);

});

socket.on('ultimos4', function(data) {

    let audio = new Audio('audio/new-ticket.mp3');
    window.focus();
    audio.play();

    actualizaHtml(data.ultimos4);

});

function actualizaHtml(ultimos4) {
    for (let i = 0; i <= ultimos4.length - 1; i++) {
        lblTickets[i].text('Ticket: ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio: ' + ultimos4[i].escritorio);
    }
}