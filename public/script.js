const palabras = ["javascript", "programa", "ordenador", "pantalla", "teclado", "raton", "internet", "codigo", "desarrollador", "algoritmo"];
let palabraActual = "";
let palabraDesordenada = "";
let correctas = 0;
let incorrectas = 0;

function desordenar(palabra) {
    return palabra.split('').sort(() => Math.random() - 0.5).join('');
}

function nuevaPalabra() {
    palabraActual = palabras[Math.floor(Math.random() * palabras.length)];
    palabraDesordenada = desordenar(palabraActual);
    document.getElementById("scrambled-word").textContent = palabraDesordenada;
    document.getElementById("user-input").value = "";
    document.getElementById("result").textContent = "";
}

document.getElementById("verify-btn").addEventListener("click", function() {
    const respuesta = document.getElementById("user-input").value.trim().toLowerCase();
    if (respuesta === palabraActual) {
        document.getElementById("result").textContent = "Correcto!";
        correctas++;
        document.getElementById("correct-count").textContent = correctas;
        nuevaPalabra();
    } else {
        document.getElementById("result").textContent = "Inténtalo de nuevo!";
        incorrectas++;
        document.getElementById("incorrect-count").textContent = incorrectas;
    }
});

document.getElementById("random-btn").addEventListener("click", nuevaPalabra);
window.onload = nuevaPalabra;