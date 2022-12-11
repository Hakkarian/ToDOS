const onTimerMarkup = () => `<div class="timer">
<span class="timer__span">123</span>
<button class="timer__start" type="button" data-action="start">Start</button>
<button class="timer__stop" type="button" data-action="stop" disabled>Stop</button>
</div>`

export class Timer {
    constructor({ selector, value }) {
        this.value = value;
        this.parent = document.querySelector(selector);
        this.parent.insertAdjacentHTML('beforeend', onTimerMarkup())
        this.timerSpan = this.parent.querySelector('.timer__span')
        this.timerStart = this.parent.querySelector('.timer__start')
        this.timerStop = this.parent.querySelector('.timer__stop')


        this.timerStart.addEventListener('click', this.onStart.bind(this));
        this.timerStop.addEventListener('click', this.onStop.bind(this));
        this.render();
    }
    render() {
        this.timerSpan.textContent = this.value //moment('November 21st 2022, 18:20:52 pm').format('MMMM Do YYYY HH:mm:ss a)
        this.value -= 1
    }
    onStart() {
        this.timerID = setInterval(this.render.bind(this), 1000)
        this.timerStart.setAttribute("disabled", true)
        this.timerStop.removeAttribute("disabled")
    }
    onStop() {
        clearInterval(this.timerID)
        this.timerStart.removeAttribute("disabled")
        this.timerStop.setAttribute("disabled", true)
    }
}