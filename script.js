let blockTwoTimes = document.querySelector('.block-two__times');


let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let milliseconds = document.querySelector('#milliseconds');

let btnStart = document.querySelector('#btn-start');
let btnFix = document.querySelector('#btn-fix');
let btnReset = document.querySelector('#btn-reset');
let btnClear = document.querySelector('#btn-clear');

let min = 0;
let sec = 0;
let milsec = 0;
let begin;

let times = [];

let timer = function() {
    if(milsec == 99) {
        if(sec == 59) {
            if (min == 59) {
                min = 0;
                sec = 0;
                milsec = 0;
                minutes.textContent = '00';
                seconds.textContent = '00';
                milliseconds.textContent = '00';
            } else {
                min += 1;
                minutes.textContent = String(min).padStart(2,'0');
                sec = 0;
                milsec = 0;
                seconds.textContent = '00';
                milliseconds.textContent = '00';
            }
        } else {
            sec += 1;
            seconds.textContent = String(sec).padStart(2,'0');
            milsec = 0;
            milliseconds.textContent = '00';
        }
    } else {
        milsec += 1;
        milliseconds.textContent = String(milsec).padStart(2,'0');
    }
}


btnStart.addEventListener('click', ()=>{
    if(min == 0 && sec == 0 && milsec == 0){
        begin = setInterval(timer, 10)
    }
});

btnReset.addEventListener('click', ()=>{
    clearInterval(begin);
    min = 0;
    sec = 0;
    milsec = 0;
    minutes.textContent = '00';
    seconds.textContent = '00';
    milliseconds.textContent = '00';
});

btnFix.addEventListener('click', () => {
    blockTwoTimes.textContent = '';
    let timeItem = `${minutes.textContent}:${seconds.textContent}:${milliseconds.textContent}`;
    times.push(timeItem);
    console.log(times);

    times.forEach((item) => {
        let newDiv = document.createElement('li');
        newDiv.textContent = item;
        blockTwoTimes.appendChild(newDiv);
    });

    blockTwoTimes.scrollTop = blockTwoTimes.scrollHeight;
})

btnClear.addEventListener('click', () => {
    times = [];
    blockTwoTimes.textContent = '';
})