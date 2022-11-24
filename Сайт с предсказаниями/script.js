'use strict';

const buttonKnow = document.querySelector('.know');
const buttonGet = document.querySelector('.get');
const timer = document.querySelector('#timer');
const predictions = document.querySelector('.predictions');
let timerI

const zodiaSigns = [
    "Смотри чаще в окно, там будет истина",
    "Твой пукть и есть сила, сегодня ты это поймёшь",
    "Та мысль, которая была секунду назад, она очень важна",
    "Сила в слабости",
    "Не слушай сегодня ни кого, прислушайся к интуиции",
    "Испытания с котром ты сегодня столкнёшся, не сопротивляйся, наблюдай",
    "Где сопротивление, там нужно рост",
    "Помоги сегодня тому кто нуждается",
    "Твоя правда, запомни, только твоя",
    "Если ты отбёрешь у кого-то надежду, кто-то её отберёт у тебя",
]



buttonKnow.addEventListener('click', () => {
    
    buttonKnow.classList.remove('show')
    buttonKnow.classList.add('hide')
    buttonGet.classList.remove('hide')
    buttonGet.classList.add('show')
    return timerI = setInterval(() => changeNum(), 100);
})

buttonGet.addEventListener('click', () => {
    clearInterval(timerI)
    buttonGet.classList.add('hide')
    predictions.classList.add('show')
    predictions.classList.remove('hide')
    predictions.textContent = zodiaSigns[timer.textContent]
})

function changeNum() {
   return timer.textContent = Math.floor(Math.random() * (10 - 0)) + 0;
}