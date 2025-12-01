const cuentos = document.querySelectorAll(".cuento-item");
const videoBox = document.getElementById("videoBox");
const videoFrame = document.getElementById("videoFrame");

cuentos.forEach(cuento => {
    cuento.addEventListener("click", () => {
        const videoID = cuento.getAttribute("data-video");
        
        // Agregamos autoplay=1 para que inicie al dar clic
        // Importante: Si el video tiene restricción 153, seguirá sin verse.
        const url = `https://www.youtube.com/embed/${videoID}?rel=0&modestbranding=1&autoplay=1`;

        videoFrame.src = url;
        videoBox.style.display = "block";

        // Scroll suave hacia el video
        videoBox.scrollIntoView({ behavior: "smooth" });
    });
});


        const escenario = document.getElementById('escenario');
        const iframe = document.getElementById('videoFrame');

        function verVideo(elemento) {
            // 1. Obtener ID
            const videoId = elemento.getAttribute('data-video');
            
            // 2. Construir URL
            // mute=1 es OBLIGATORIO para que funcione el autoplay en Chrome/Edge hoy en día
            const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

            // 3. Asignar URL
            iframe.src = youtubeUrl;
        

            // 4. Activar el giro
            escenario.classList.add('is-flipped');
            videoBox.style.display = "block";
        }

        function cerrarVideo() {
            // 1. Volver al frente
            escenario.classList.remove('is-flipped');

            // 2. Limpiar iframe después de que termine la animación (800ms)
            setTimeout(() => {
                iframe.src = ""; 
            }, 800);
        }
