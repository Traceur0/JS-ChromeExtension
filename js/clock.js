const clock = document.querySelector("h2#clock")

clock.innerText = ""


function time() {
  var hr = Date().getHours();
  var min = Date().getMinutes();
  var sec = Date().getSeconds();
  console.log(`${hr}:${min}:${sec}`);
}

setInterval(time(), 1000);