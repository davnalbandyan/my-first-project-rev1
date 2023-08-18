function timerModule(){
  
  const date = "2023-12-31";
  function getTimeRemaining(end) {
    const total = Date.parse(end) - Date.parse(new Date());
    const days = Math.floor(
      total / (1000 * 60 * 60 * 24)
    ); /* get the days quantity*/
    const hours = Math.floor(
      (total / (1000 * 60 * 60)) % 24
    ); /*get the hours quantity*/
    const min = Math.floor((total / 1000 / 60) % 60); /* get the min quantity*/
    const seconds = Math.floor((total / 1000) % 60); /* get the sec quantity*/

    return {
      total,
      days,
      hours,
      min,
      seconds,
    };
  }
  function setClock(selector, ending) {
    const timer = document.querySelector(selector);
    const daysBlock = timer.querySelector("#days");
    const hoursBlock = timer.querySelector("#hours");
    const minutesBlock = timer.querySelector("#minutes");
    const secondsBlock = timer.querySelector("#seconds");
    const timerID = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const time = getTimeRemaining(ending); /*ask to Sammi ending ի պահ ը)*/

      daysBlock.textContent =
        time.days >= 0 && time.days < 10 ? `0${time.days}` : time.days;
      hoursBlock.textContent =
        time.hours >= 0 && time.hours < 10 ? `0${time.hours}` : time.hours;
      minutesBlock.textContent =
        time.min >= 0 && time.minutes < 10 ? `0${time.min}` : time.min;
      secondsBlock.textContent =
        time.seconds > 0 && time.seconds < 10
          ? `0${time.seconds}`
          : time.seconds;

      if (time.total <= 0) {
        clearInterval(timerID);
      }
    }
  }

  setClock(".timer", date);

}

// module.exports = timerModule;

export default timerModule