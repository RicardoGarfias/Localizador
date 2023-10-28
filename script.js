function updateTimeAndDate() {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    const locationElement = document.getElementById("location");

    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('es-ES', options);
    const formattedTime = now.toLocaleTimeString('es-ES');
    const location = window.location.href;

    dateElement.textContent = "Fecha: " + formattedDate;
    timeElement.textContent = "Hora: " + formattedTime;
    locationElement.textContent = "Ubicación: " + location;
}

updateTimeAndDate();
setInterval(updateTimeAndDate, 1000);
