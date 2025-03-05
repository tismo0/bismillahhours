// Fonction pour calculer les heures
function calculate() {
    let input = document.getElementById("timeInput").value;
    let result = computeTimeExpression(input);
    document.getElementById("result").innerText = "Résultat : " + result;
}

// Fonction pour parser et calculer une suite d'heures
function computeTimeExpression(expression) {
    let terms = expression.match(/[-+]?\s*\d+:\d+/g);
    if (!terms) return "Format invalide";

    let totalMinutes = 0;

    terms.forEach(term => {
        let sign = term.includes("-") ? -1 : 1;
        let [hours, minutes] = term.replace(/\s+/g, "").split(":").map(Number);
        totalMinutes += sign * (hours * 60 + minutes);
    });

    let finalHours = Math.floor(Math.abs(totalMinutes) / 60);
    let finalMinutes = Math.abs(totalMinutes) % 60;
    let sign = totalMinutes < 0 ? "-" : "";

    return `${sign}${String(finalHours).padStart(2, "0")}:${String(finalMinutes).padStart(2, "0")}`;
}

// Effet Matrice (Lettres qui tombent)
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "0123456789+-x÷=π∞";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "lime";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        let text = letters[Math.floor(Math.random() * letters.length)];
        let x = i * fontSize;
        let y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);
