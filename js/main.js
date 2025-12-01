// Esta función se llama desde el HTML con onclick="seleccionarOpcion(...)"
function seleccionarOpcion(tema) {
    console.log("Usuario seleccionó: " + tema);
    
    // Aquí podrías redirigir a otra página, por ejemplo:
    // window.location.href = tema.toLowerCase() + '.html';
    
    alert("¡Vamos a aprender sobre: " + tema + "!");
}
