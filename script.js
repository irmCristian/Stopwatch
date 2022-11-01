
const start = document.querySelector('.start')
const stops = document.querySelector('.stop')
const hours = document.querySelector('.hours')
const seconds = document.querySelector('.seconds')
const miliseconds = document.querySelector('.miliseconds')
const minutes = document.querySelector('.minutes')
const resetBtn = document.querySelector('.reset')


let timer = true
let hour = 0
let minute = 0
let second = 0
let milisecond = 0


start.addEventListener('click', function () {
    timer = true
    stopwatch()
})

stops.addEventListener('click', function () {
    timer = false

})

resetBtn.addEventListener('click', function () {
 timer = false
 hour = 0
 minute = 0
 second = 0
 milisecond = 0
hours.innerHTML = '00'
minutes.innerHTML = '00'
seconds.innerHTML = '00'
miliseconds.innerHTML = '00'
})

function stopwatch() {
    if (timer) {
        milisecond++

        if (milisecond == 100) {
            second++
            milisecond = 0
        }
        if (second == 60) {
            minute++
            second = 0
        }
        if (minute == 60) {
            hour++
            minute = 0
            second = 0
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let milisecondString = milisecond;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (milisecond < 10) {
            milisecondString = "0" + milisecondString;
        }
        hours.innerHTML = hrString
        minutes.innerHTML = minString
        seconds.innerHTML = secString
        miliseconds.innerHTML = milisecondString
        setTimeout(stopwatch, 10);
    }
}
