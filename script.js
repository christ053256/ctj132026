const countdownEl = document.getElementById("countdown");
const targetDate = new Date("2026-07-13T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "1 year and 3 months has been completed.";
    clearInterval(interval);
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  const remHours = totalHours % 24;
  const remMinutes = totalMinutes % 60;
  const remSeconds = totalSeconds % 60;

  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const remDays = (totalDays % 365) % 30;

  const fullCountdown = `${years} ${years === 1 ? "year" : "years"}, ` +
                        `${months} ${months === 1 ? "month" : "months"}, ` +
                        `${remDays} ${remDays === 1 ? "day" : "days"}, ` +
                        `${remHours} ${remHours === 1 ? "hour" : "hours"}, ` +
                        `${remMinutes} ${remMinutes === 1 ? "minute" : "minutes"}, ` +
                        `${remSeconds} ${remSeconds === 1 ? "second" : "seconds"}\n\n` +
                        `Simplified countdown:\n` +
                        `${totalDays} ${totalDays === 1 ? "day" : "days"}, ` +
                        `${remHours} ${remHours === 1 ? "hour" : "hours"}, ` +
                        `${remMinutes} ${remMinutes === 1 ? "minute" : "minutes"}, ` +
                        `${remSeconds} ${remSeconds === 1 ? "second" : "seconds"}`;

  countdownEl.textContent = fullCountdown;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();