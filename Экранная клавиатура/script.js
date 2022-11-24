'use strict';

const screenKeyboard = document.querySelector('.screenKeyboard');
const input = document.querySelector('input');
const button = document.querySelector('button');
const keys = document.querySelectorAll('.key');

button.addEventListener('click', () => {
    button.classList.toggle('active')
    upLowKeys()
    })

function upLowKeys() {
    if (button.className == 'active') {
        keys.forEach(item => {
            item.textContent = item.textContent.toUpperCase()
        })
    } else {
        keys.forEach(item => {
            item.textContent = item.textContent.toLowerCase()
        })
    }
    
}

screenKeyboard.addEventListener('click',(e) => {
    const target = e.target;
    if (target.className == 'key') {
        input.value = input.value + target.textContent
    }    
})

upLowKeys()