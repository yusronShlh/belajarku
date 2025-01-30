// Set the date we're counting down to
var countDownDate = new Date("Dec 4, 2030 08:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time difference
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the circular elements
  document.getElementById("days-number").innerHTML = days;
  document.getElementById("hours-number").innerHTML = hours;
  document.getElementById("minutes-number").innerHTML = minutes;
  document.getElementById("seconds-number").innerHTML = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-container").innerHTML = "Acara telah dimulai!";
  }
}, 1000);
