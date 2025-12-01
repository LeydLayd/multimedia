const escenario = document.getElementById('escenario-giratorio');
const videoGrande = document.getElementById('video-grande-visor');
const tituloVisor = document.getElementById('titulo-cuento');
const textoVisor = document.getElementById('texto-cuento-completo');

function leerCuento(elementoTarjeta) {
    // 1. Obtener datos básicos
    const videoSrc = elementoTarjeta.querySelector('video').src;
    const titulo = elementoTarjeta.getAttribute('data-titulo');
    const archivoTxt = elementoTarjeta.getAttribute('data-archivo');
    const cuentoDirecto = elementoTarjeta.getAttribute('data-cuento');

    // 2. Poner video y título
    videoGrande.src = videoSrc;
    tituloVisor.innerText = titulo || "Un cuento mágico";
    textoVisor.innerText = "Abriendo el libro mágico...";

    // 3. Cargar el texto
    if (archivoTxt) {
        fetch(archivoTxt)
            .then(respuesta => {
                if (!respuesta.ok) throw new Error("No se encontró el cuento");
                return respuesta.text();
            })
            .then(texto => {
                textoVisor.innerText = texto;
                // ⭐ REINICIAR SCROLL AL INICIO
                resetearScroll();
            })
            .catch(error => {
                textoVisor.innerText = "Lo siento, las páginas de este libro se han perdido.";
                console.error(error);
                resetearScroll();
            });
    } else if (cuentoDirecto) {
        // Si el cuento está directo en el data-cuento
        textoVisor.innerText = cuentoDirecto;
        resetearScroll();
    } else {
        textoVisor.innerText = "No hay historia definida para esta tarjeta.";
        resetearScroll();
    }

    // 4. Reproducir y Girar
    videoGrande.play();
    escenario.classList.add('is-flipped');
}

function cerrarCuento() {
    escenario.classList.remove('is-flipped');
    
    setTimeout(() => {
        videoGrande.pause();
        videoGrande.src = "";
    }, 800);
}

// ⭐ FUNCIÓN NUEVA: Resetear scroll
function resetearScroll() {
    const bookText = document.querySelector('.book-text');
    if (bookText) {
        // Esperar un frame para asegurar que el DOM se actualizó
        setTimeout(() => {
            bookText.scrollTop = 0;
        }, 100);
    }
}