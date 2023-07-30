// JavaScript code for index.html
window.addEventListener('DOMContentLoaded', function() {
  const storedData = localStorage.getItem('prayerTimes');
  if (storedData) {
    const prayerTimes = JSON.parse(storedData);

    // Display prayer times on the page
    document.getElementById('fajr').textContent = prayerTimes.Fajr;
    document.getElementById('duhr').textContent = prayerTimes.Dhuhr;
    document.getElementById('asr').textContent = prayerTimes.Asr;
    document.getElementById('maghrib').textContent = prayerTimes.Maghrib;
    document.getElementById('isha').textContent = prayerTimes.Isha;
  }
});
