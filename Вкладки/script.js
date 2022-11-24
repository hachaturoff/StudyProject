'use strict';

const menu = document.querySelector('.menu');
const tabs = document.querySelector('.tabs');

const link = document.querySelectorAll('a');
const tab = document.querySelectorAll('.tab');
// const button = document.querySelector('button');
// const wrapper = document.querySelector('.wrapper');


function hideTab() {
    tab.forEach(item => {
        item.classList.remove('active')        
    })

    link.forEach(item => {
        item.classList.remove('active')        
    })    
}

function showTab(i = 0) {
    link[i].classList.add('active')
    tab[i].classList.add('active')
}

hideTab()
showTab()

menu.addEventListener('click', (e) => {
    e.preventDefault()
    const target = e.target; 
    link.forEach((item , i) => {
        if (item == target) {
            hideTab()
            showTab(i)
        }   
    })   
})


