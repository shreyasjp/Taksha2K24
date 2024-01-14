// Set the date we're counting down to
var countDownDate = new Date("February 6, 2024 09:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the remaining time
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown-container").innerHTML =
    '<div class="time-unit"><span>' +
    days +
    "</span>DAYS</div>" + '&nbsp' +
    '<div class="time-unit"><span>' +
    hours +
    "</span>HOURS</div>" + '&nbsp' +
    '<div class="time-unit"><span>' +
    minutes +
    "</span>MINUTES</div>" + '&nbsp' +
    '<div class="time-unit"><span>' +
    seconds +
    "</span>SECONDS</div>";

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-container").innerHTML = "Bits & Beats Live!";
  }
}, 1000);
