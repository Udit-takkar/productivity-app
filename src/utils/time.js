const time = [];
var input = {
  hours: 12,
  minutes: 30,
};

var timestamp = new Date(input.hours, input.minutes);

for (let i = 0; i < 144; ++i) {
  let time1 = new Date(timestamp.getTime());
  let time2 = new Date(timestamp.getTime() + 10 * 60000);

  let tooltipTime =
    i < 72
      ? time1.getHours() +
        ":" +
        time1.getMinutes() +
        "am" +
        "-" +
        time2.getHours() +
        ":" +
        time2.getMinutes() +
        "am"
      : time1.getHours() +
        ":" +
        time1.getMinutes() +
        "pm" +
        "-" +
        time2.getHours() +
        ":" +
        time2.getMinutes() +
        "pm";
  timestamp = new Date(timestamp.getTime() + 10 * 60000);
  time.push(tooltipTime);
}

export default time;
