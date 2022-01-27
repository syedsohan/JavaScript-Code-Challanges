function clock() {
  const clockNode = document.querySelector("#clock");
  return setInterval(() => {
    let date = new Date();
    let tick = date.toLocaleTimeString();
    clockNode.textContent = tick;
  }, 1000);
}

clock();
