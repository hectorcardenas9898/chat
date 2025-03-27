document.addEventListener('DOMContentLoaded', () => {
    const areaMensajes = document.getElementById('areaMensajes');
    const entradaMensaje = document.getElementById('entradaMensaje');
    const botonEnviar = document.getElementById('botonEnviar');

    function crearElementoMensaje(texto, esEnviado) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('mensaje');
        divMensaje.classList.add(esEnviado ? 'enviado' : 'recibido');
        divMensaje.textContent = texto;
        return divMensaje;
    }

    botonEnviar.addEventListener('click', manejarEnvioMensaje);
    entradaMensaje.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            manejarEnvioMensaje();
        }
    });

    function manejarEnvioMensaje() {
        const texto = entradaMensaje.value.trim();
        if (texto) {
            const elementoMensaje = crearElementoMensaje(texto, true);
            areaMensajes.appendChild(elementoMensaje);
            entradaMensaje.value = '';
            areaMensajes.scrollTop = areaMensajes.scrollHeight;
        }
    }
});