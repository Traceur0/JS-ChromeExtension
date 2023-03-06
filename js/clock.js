const clock = document.querySelector("h2#clock")


function time() {
  const date = new Date();
  const hr = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hr}:${min}:${sec}`;
}

time();
setInterval(time, 1000);