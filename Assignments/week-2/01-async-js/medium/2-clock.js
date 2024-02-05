// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// import counter from "../easy/1-counter";

function counter(stopAfter) {
  let i = 0;
  const intervalId = setInterval(() => {
    let date = new Date();
    let timeNow = date.toTimeString().substring(0, 8);

    console.log("24hr Clock:", timeNow);
    if (timeNow.substring(0, 2) >= "12") {
      let hrsFor24Hr = Number(timeNow.substring(0, 2)) - 12;
      timeNow[1] = toString(hrsFor24Hr % 10);
      timeNow[0] = toString(hrsFor24Hr / 10);
      console.log("12hr Clock:", timeNow, "PM");
    } else {
      console.log("12hr Clock:", timeNow, "AM");
    }
    i++;
    if (i >= stopAfter) {
      clearInterval(intervalId); // Stop the interval
    }
  }, 1000);
}

counter(20);
