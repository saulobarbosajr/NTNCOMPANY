// Defina a data para a contagem regressiva (lembre-se que já passou!)
var countDownDate = new Date("Apr 20, 2025 00:00:00").getTime();

// Atualize a contagem regressiva a cada 1 segundo
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days-top").innerText = String(days).padStart(2, '0');
    document.getElementById("days-bottom").innerText = String(days).padStart(2, '0');
    document.getElementById("hours-top").innerText = String(hours).padStart(2, '0');
    document.getElementById("hours-bottom").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes-top").innerText = String(minutes).padStart(2, '0');
    document.getElementById("minutes-bottom").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds-top").innerText = String(seconds).padStart(2, '0');
    document.getElementById("seconds-bottom").innerText = String(seconds).padStart(2, '0');

    // Quando a contagem regressiva terminar, mostre uma mensagem
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "<div style='font-size: 1.5em; font-weight: bold;'>O evento aconteceu!</div>";
    }
}, 1000);