// JavaScript code for 1index.html
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('time-form');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const address = document.getElementById('address').value;

    // Use the entered address and the current date for the API request
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    const apiUrl = `http://api.aladhan.com/v1/timingsByAddress/?address=${address}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      // Save the prayer times to localStorage
      localStorage.setItem('prayerTimes', JSON.stringify(data.data.timings));

      // Redirect to the second page (index.html)
      window.location.href = "index.html";
    } catch (error) {
      console.error('Error fetching prayer times:', error);
      // You can display an error message to the user if the API request fails
    }
  });
});
