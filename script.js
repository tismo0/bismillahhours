function calculateTime(operation) {
    let time1 = document.getElementById("time1").value;
    let time2 = document.getElementById("time2").value;

    let [h1, m1] = time1.split(":").map(Number);
    let [h2, m2] = time2.split(":").map(Number);

    let totalHours, totalMinutes;

    if (operation === "add") {
        totalMinutes = m1 + m2;
        totalHours = h1 + h2 + Math.floor(totalMinutes / 60);
        totalMinutes %= 60;
    } else if (operation === "subtract") {
        totalMinutes = m1 - m2;
        totalHours = h1 - h2;

        if (totalMinutes < 0) {
            totalMinutes += 60;
            totalHours -= 1;
        }

        totalHours = Math.max(0, totalHours);
        totalMinutes = Math.max(0, totalMinutes);
    }

    let result = `${String(totalHours).padStart(2, '0')}:${String(totalMinutes).padStart(2, '0')}`;
    document.getElementById("result").innerText = `Résultat : ${result}`;
}
