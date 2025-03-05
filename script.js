// Fonction pour calculer les heures
function calculate() {
    let time1 = document.getElementById("time1").value;
    let time2 = document.getElementById("time2").value;
    let operation = document.getElementById("operation").value;
    
    if (!time1 || !time2) {
        document.getElementById("result").innerText = "Veuillez entrer deux heures.";
        return;
    }

    let [h1, m1] = time1.split(":").map(Number);
    let [h2, m2] = time2.split(":").map(Number);
    
    let totalMinutes1 = h1 * 60 + m1;
    let totalMinutes2 = h2 * 60 + m2;
    let resultMinutes = operation === "+" ? totalMinutes1 + totalMinutes2 : totalMinutes1 - totalMinutes2;
    
    let finalHours = Math.floor(Math.abs(resultMinutes) / 60);
    let finalMinutes = Math.abs(resultMinutes) % 60;
    let sign = resultMinutes < 0 ? "-" : "";

    document.getElementById("result").innerText = `Résultat : ${sign}${String(finalHours).padStart(2, "0")}:${String(finalMinutes).padStart(2, "0")}`;
}

// Effet Matrice amélioré (Lettres qui tombent avec glow)
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "0123456789+-x÷=π∞";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
    ctx.font = fontSize + "px monospace";
    
    for (let i = 0; i < drops.length; i++) {
        let text = letters[Math.floor(Math.random() * letters.length)];
        let x = i * fontSize;
        let y = drops[i] * fontSize;

        ctx.shadowColor = "lime";
        ctx.shadowBlur = 10;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);
