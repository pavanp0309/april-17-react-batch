let timer;
    let totalMilliseconds = 0;

    function startTimer() {
        if (!timer) {
            timer = setInterval(updateTimer, 10); // update every 10ms
        }
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    function resetTimer() {
        stopTimer();
        totalMilliseconds = 0;
        updateTimer();
    }

    // 1 hour = 60 minutes × 60 seconds × 1000 milliseconds = 3,600,000 milliseconds
    // totalMilliseconds % 3600000: Gets the remaining time after removing all full hours.
    //  60000 milliseconds = 1 minute
//     totalMilliseconds % 60000: Gets the remaining time after removing all full minutes.
// 1000 milliseconds = 1 second
// totalMilliseconds % 1000: Gets the remaining milliseconds after removing full seconds.
// We divide by 10 because:
// You want to display 2-digit milliseconds (hundredths of a second).
// 1000 ms / 10 = 100 values (00 to 99).

    function updateTimer() {
        const hours = Math.floor(totalMilliseconds / 3600000);
        const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
        const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
        const milliseconds = Math.floor((totalMilliseconds % 1000) / 10); // 2-digit ms

        const formattedTime = `${String(hours).padStart(2, "0")}:${String(
            minutes
        ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(
            milliseconds
        ).padStart(2, "0")}`;

        document.getElementById("timer").textContent = formattedTime;
        totalMilliseconds += 10;
    }