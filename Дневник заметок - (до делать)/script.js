'use strict';

let textArea = document.querySelector('textarea');
let list = document.querySelector('ul');
let saveNote = document.querySelector('#saveNote');
let addNote = document.querySelector('#newNote');
let li = document.querySelectorAll('li');
let p = document.querySelector('p')

let notes = []

p.textContent = 'Режим добавления новых записей'

saveNote.addEventListener('click', () => {
   let mode = saveNote.dataset.mode
   
   if (mode == 'create') {    
    notes[notes.length] = textArea.value
    li[notes.length - 1].classList.add('active')
    textArea.value = ''
    
   }

   if (mode == 'update') {
    saveNote[] = textArea.value
    
   }

})

li.forEach(item => {
    item.addEventListener('click', () => {  

        if (item.className == 'active') {      
            p.textContent = 'Режим редактирования записей'; 
            saveNote.setAttribute('data-mode','update')
            textArea.value = notes[item.dataset.key]
            

        }
        if (item.className !== 'active') {      
            p.textContent = 'Режим добавления новых записей'; 
            saveNote.setAttribute('data-mode','create')
            textArea.value = ''
        }
        
    })    
})

