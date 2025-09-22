let num = 0;

let interval = setInterval(() => {
  let date = new Date().toLocaleTimeString();

  console.log(date);
  num++;
  if (num === 10) {
    clearInterval(interval);
    console.log("Alarm ringing!");
    setTimeout(() => {
      console.log("The clock has stopped. Have a great day!");
    }, 5000);
  }
}, 1000);
