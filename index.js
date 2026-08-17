const timeText = document.querySelector("#time");

function updateClock() {
  const now = new Date();
  const currentHours = now.getHours();
  const period = currentHours >= 12 ? "PM" : "AM";

  let hours = currentHours % 12;

  if (hours === 0) {
    hours = 12;
  }

  hours = String(hours).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  timeText.textContent = `${hours}:${minutes}:${seconds} ${period}`;
}
updateClock();
setInterval(updateClock, 1000);
