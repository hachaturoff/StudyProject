'use strict';

let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');



add.addEventListener('click', () => {    
    total.textContent = 0
    let tr = document.createElement('tr');
	
	createCell(tr, name.value, 'name');
	createCell(tr, price.value, 'price');
	createCell(tr, amount.value, 'amount');
	createCell(tr, price.value * amount.value, 'cost');
	createCell(tr, 'удалить', 'remove');

	table.appendChild(tr);
    recountTotal()
    
    
})



function createCell(tr, value, name) {    
    let func = () => {
        let td
        td = document.createElement('td')
        td.textContent = value
        td.classList.add(`${name}`)
        tr.appendChild(td)
        }
        
    return func()
}

function recountTotal() {
    let costs = table.querySelectorAll('.cost')

    if (costs) {
        costs.forEach(item => {
           total.textContent = +total.textContent + +item.textContent
        })
      }
}
