function pausarMusica() {
    document.getElementById('reproductor').pause();
}

function reanudarMusica() {
    document.getElementById('reproductor').play();
}

// corazones flotantes
function crearCorazones() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(crearCorazones, 300);

// activador de audio con clic
window.addEventListener('click', () => {
    const audio = document.getElementById('reproductor');
    audio.src = 'cancion.mp3';
    audio.muted = false;
    audio.play();
}, { once: true });
