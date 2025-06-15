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
