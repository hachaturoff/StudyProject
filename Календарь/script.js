'use strict';

const screenKeyboard = document.querySelector('.screenKeyboard');
const input = document.querySelector('input');
const buttPrev = document.querySelector('#prev');
const buttNext = document.querySelector('#next');
const li = document.querySelectorAll('li');
const dates = document.querySelector('.dates');
const ul = document.querySelector('ul');

let months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
let date = new Date();
let month = date.getMonth();
let nameMonth = months[month];
let lengthDay = new Date(2022, 7, 0).getDate()

function lengthDayMonth(day) {    
    ul.innerHTML += `<li>${day}</li>` 
}

dates.innerHTML = `<p class='dates'>${nameMonth} ${date.getFullYear()}</p>`

buttNext.addEventListener('click', () => {
        dates.innerHTML = `<p class='dates'>${months[month += 1]} ${date.getFullYear()}</p>`;
        
})
buttPrev.addEventListener('click', () => {
    dates.innerHTML = `<p class='dates'>${months[month -= 1]} ${date.getFullYear()}</p>`;
    
})

for ( let i = 1; i < lengthDay + 1; i++) {
    lengthDayMonth(i) 
}

ul.childNodes.forEach(item => {
    if (item.textContent == date.getDate()) {        
        item.classList.add('active')
    }
})



