'use strict';

let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', (e) => {
    if(e.key == 'Enter') {
        let taskName = input.value
        addTask(taskName)
        input.value =''
       
    }
})


function addTask(task) {
    let li = document.createElement('li')
    li.innerHTML = `
    <h3 class='task'>${task}</h3>
    <span class='remove'>Удалить</span>
    <span class='mark'>Сделано</span>`
    list.appendChild(li)
    
    li.addEventListener('click', (e) => {
        let target = e.target
        if ( target.className == 'remove') {            
            li.remove()            
        }
        if ( target.className == 'mark') {            
           document.querySelector('.task').classList.add('through')         
        }
        
    })

    li.addEventListener('dblclick', (e) => {
        if ( e.target.className == 'task') {
            let task = document.querySelector('.task')
                
            let lastInput = document.createElement('input') 
            lastInput.value = task.textContent 
            task.textContent = ''
            task.appendChild(lastInput)         

            lastInput.addEventListener('keypress', (e) => {
                if(e.key == 'Enter') {
                    task.textContent = lastInput.value
                    lastInput.remove()
                }
            })
        
    }
    })
    
}