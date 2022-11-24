'use strict';


import { allCityes } from './allCityes';

let field   = document.querySelector('#field');
let message = document.querySelector('#message');


console.log(includes)

let cities = ['sd']
let i = 0;

field.addEventListener('keydown', (e) => {
    
    if (e.keyCode === 13) {
            if (field.value == '') {
                message.textContent = 'Введите город'
            }            
            else if (field.value.toLowerCase() == cities.find(item => field.value.toLowerCase() == item)) {
                message.textContent = 'Такой город уже называли'
                field.value = ''
                field.classList.add('error')
            } 
            else if (!includes(field.value.toLowerCase())) {
                message.textContent = 'Такого города не существует'
                field.value = ''
                field.classList.add('error')
            }
            else {
                addCity(i)
                i++
                stepRobot(i)
                i++
                field.classList.remove('error')
            }
    }
    
})

function addCity(i) {
    cities[i] = field.value.toLowerCase()    
    console.log(cities)    
    field.value = ''
    field.placeholder = `Введите город на букву ${cities[cities.length - 1].slice(-1).toUpperCase()}`
    message.textContent = ''
}


function stepRobot(i) {
    let lastLetter = cities[cities.length - 1].slice(-1).toLowerCase()
    field.value = find(item => lastLetter == item.slice(0, 1))
    cities[i] = field.value
    field.placeholder = `Введите город на букву ${cities[cities.length - 1].slice(-1).toUpperCase()}`
    console.log(cities)  
}










