// Lluvia de "Te amo"
const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frases = Array(300).fill("Te amo");
const fontSize = 20;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }).fill(1);

function drawRain() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff69b4";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = frases[Math.floor(Math.random() * frases.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawRain, 50);

// Efecto de destello con corazones
document.addEventListener("click", (e) => {
  const effect = document.createElement("div");
  effect.className = "teAmoEffect";
  effect.style.left = `${e.clientX}px`;
  effect.style.top = `${e.clientY}px`;
  effect.innerText = "💖 Te amo infinito Mia💖";

  document.getElementById("clickEffectContainer").appendChild(effect);

  setTimeout(() => effect.remove(), 1000);
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Botón romántico
const boton = document.getElementById("botonAmor");
const mensaje = document.getElementById("mensajeOculto");

boton.addEventListener("click", () => {
  mensaje.style.display = "block";
  mensaje.classList.remove("fadeOut");

  setTimeout(() => {
    mensaje.style.display = "none";
  }, 3000);
});


function actualizarContadorTiempo() {
  const fechaObjetivo = new Date("2025-08-11T00:00:00");
  const ahora = new Date();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    document.getElementById("contador-tiempo").innerHTML = `
      <div style="color: #fff; font-size: 1.5rem; text-shadow: 0 0 10px #ff69b4;">
        ¡Feliz aniversario, mi amor! 🎉💖
      </div>`;
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("dias").textContent = String(dias).padStart(2, '0');
  document.getElementById("horas").textContent = String(horas).padStart(2, '0');
  document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
  document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');
}

setInterval(actualizarContadorTiempo, 1000);
actualizarContadorTiempo(); // Llamar una vez al principio
