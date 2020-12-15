"use strict";

const start = document.querySelector(".btn"),
      circle = document.querySelector(".circle"),
      rst = document.querySelector(".rst"),
      easy = document.querySelector(".easy"),
      normal = document.querySelector(".normal"),
      hard = document.querySelector(".hard"),
      insane = document.querySelector(".insane"),
      hits = document.querySelector(".hits"),
      score = document.querySelector(".score"),
      wrapper = document.querySelector(".wrapper"),
      countdown = document.querySelector(".countdown"),
      red = document.querySelector(".red"),
      blue = document.querySelector(".blue"),
      green = document.querySelector(".green"),
      orange = document.querySelector(".orange"),
      timeOne = document.querySelector(".timeOne"),
      timeTwo = document.querySelector(".timeTwo"),
      timeThree = document.querySelector(".timeThree"),
      customTime = document.querySelector(".customTime"),
      dark = document.querySelector(".dark"),
      light = document.querySelector(".light"),
      hearth = document.querySelector(".hearth");


let difficulty = 15,
    counter = 0,
    scoreCounter = 0,
    clicks = 0,
    time = 10000,
    lifeCount = 3;


start.addEventListener('click', () => {
    if(parseInt(countdown.innerHTML) < (time/1000)){    
        reset();
        hits.innerHTML = `HITS : 0`; 
        score.innerHTML = `SCORE : 0`; 
        countdown.innerHTML = "(づ￣ ³￣)づ";
    }
    

    circle.style.visibility = "visible";
    circle.style.top = randomX();
    circle.style.left = randomY();
    timer();
    resetSize();
    countdown.innerHTML = `${time/1000} SECONDS LEFT`;
    hearth.innerHTML = "❤❤❤";
    lifeCount = 3;
})

wrapper.addEventListener('click', () => {
    clicks++;
})


circle.addEventListener('click', () => {
    circle.style.top = randomX();
    circle.style.left = randomY();
    maFunk();
    resetSize();
    ++counter;
    hits.innerHTML = `HITS : ${counter}` ; 
    score.innerHTML = `SCORE : ${Math.floor(counter * 150 / difficulty)}`;
})

rst.addEventListener('click', () => {
    reset();
    hits.innerHTML = `HITS : 0`; 
    score.innerHTML = `SCORE : 0`; 
    countdown.innerHTML = "(づ￣ ³￣)づ";
    time = 10000;
})

easy.addEventListener('click', () => {
    difficulty = 14;
    easy.style.backgroundColor = "red";
    normal.style.backgroundColor = "#9a8866";
    hard.style.backgroundColor = "#9a8866";
    insane.style.backgroundColor = "#9a8866";
})

normal.addEventListener('click', () => {
    difficulty = 12;
    easy.style.backgroundColor = "#9a8866";
    normal.style.backgroundColor = "red";
    hard.style.backgroundColor = "#9a8866";
    insane.style.backgroundColor = "#9a8866";
})

hard.addEventListener('click', () => {
    difficulty = 10;
    easy.style.backgroundColor = "#9a8866";
    normal.style.backgroundColor = "#9a8866";
    hard.style.backgroundColor = "red";
    insane.style.backgroundColor = "#9a8866";
})

insane.addEventListener('click', () => {
    difficulty = 8;
    easy.style.backgroundColor = "#9a8866";
    normal.style.backgroundColor = "#9a8866";
    hard.style.backgroundColor = "#9a8866";
    insane.style.backgroundColor = "red";
})

dark.addEventListener('click', () => {
    wrapper.style.backgroundColor = "black";
})

light.addEventListener('click', () => {
    wrapper.style.backgroundColor = "white";
})

timeOne.addEventListener('click', () => {
    time = 30000;
    countdown.innerHTML = `${time/1000} SECONDS LEFT`;
})
timeTwo.addEventListener('click', () => {
    time = 60000;
    countdown.innerHTML = `${time/1000} SECONDS LEFT`;
})
timeThree.addEventListener('click', () => {
    time = 120000;
    countdown.innerHTML = `${time/1000} SECONDS LEFT`;
})

customTime.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){    
        time = parseInt(customTime.value) * 1000;
        countdown.innerHTML = `${time/1000} SECONDS LEFT`;
        customTime.value = "";
    }
})

red.addEventListener('click', () => {
    circle.style.backgroundColor = "red";

    red.style.backgroundColor = "red";
    blue.style.backgroundColor = "#9a8866";
    green.style.backgroundColor = "#9a8866";
    orange.style.backgroundColor = "#9a8866";
})
blue.addEventListener('click', () => {
    circle.style.backgroundColor = "blue";

    red.style.backgroundColor = "#9a8866";
    blue.style.backgroundColor = "blue";
    green.style.backgroundColor = "#9a8866";
    orange.style.backgroundColor = "#9a8866";
})
green.addEventListener('click', () => {
    circle.style.backgroundColor = "green";

    red.style.backgroundColor = "#9a8866";
    blue.style.backgroundColor = "#9a8866";
    green.style.backgroundColor = "green";
    orange.style.backgroundColor = "#9a8866";
})
orange.addEventListener('click', () => {
    circle.style.backgroundColor = "orange";

    red.style.backgroundColor = "#9a8866";
    blue.style.backgroundColor = "#9a8866";
    green.style.backgroundColor = "#9a8866";
    orange.style.backgroundColor = "orange";
})

hearth.addEventListener('mouseover', () => {
    hearth.style.visibility = "hidden";

        hearth.addEventListener('mouseout', () => {
            hearth.style.visibility = "visible";
        })


})

function timer() {
    let timerIdR = setTimeout(reset, time);
    setTimeout(accuracyFunc, time - 1);
    let timerId = setInterval(() => {
        let timeLeft = parseInt(countdown.innerHTML);
        if(--timeLeft >= 0) {
            if(timeLeft < 10) {
                countdown.innerHTML = `0${timeLeft} SECONDS LEFT`;
            }
            else {
                countdown.innerHTML = `${timeLeft} SECONDS LEFT`;
            }
        } else {
            clearInterval(timerId);
        }
    }, 1000);
}

function reset() {
    resetSize();
    circle.style.top = randomX();
    circle.style.left = randomY();
    circle.style.visibility = "hidden";
    counter = 0;
    clicks = 0;
    lifeCount = 3;
}

function accuracyFunc() {
    let returnValue = ((counter / clicks) * 100).toFixed(2);

    countdown.innerHTML = `ACCURACY : ${returnValue}%`;
    return returnValue;
}

function randomX() {
    let returnValue = (Math.floor(Math.random() * 750)) + "px";
    return returnValue;
}

function randomY() {
    let returnValue = (Math.floor(Math.random() * 1500)) + "px"
    return returnValue;
}

function maFunk () {
    for(let i = 1; i <= 100; i++){
        let timerId = setTimeout(Cykl, i * difficulty);
            circle.addEventListener('click', () => {
                clearTimeout(timerId);
            }) 
    }
}

function resetSize() {
    circle.style.width = "100px";
    circle.style.height = "100px";
}

function Cykl() {
        circle.style.width = (circle.offsetWidth) - 1 + "px";
        circle.style.height = (circle.offsetHeight) - 1 + "px";
        circle.style.top = parseFloat(circle.style.top) + 0.5 + "px";   
        circle.style.left = parseFloat(circle.style.left) + 0.5 + "px";

        if(circle.offsetWidth < 5) {     
            circle.style.top = randomX();
            circle.style.left = randomY();
            resetSize();
            maFunk(); // Переделать , накладывается уменьшение после исчезания! Еще вроде есть баг с перепоявлением круга! (таймауты из MaFunk)
            hearth.innerHTML = hearth.innerHTML.substring(0, hearth.innerHTML.length - 1);
            lifeCount--;
            if(lifeCount < 1) {
                reset();
                time = 10000;
                lifeCount = 3;
            }

        }
}







