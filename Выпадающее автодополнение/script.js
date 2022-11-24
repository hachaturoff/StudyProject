'use strict';

const elem = document.querySelector('#elem');
const list = document.querySelector('#list');


const arr = [
    "Belarus",
    "Belgium",
    "Bulgaria",
    
]

elem.addEventListener('input', function() {
    list.textContent = '';

    if (this.value !== '') {
        let meth = arr.filter( item => item.startsWith(this.value))

        if (meth.length > 0) {
            meth.forEach(item => {
                let li = document.createElement('li');
                li.textContent = item;
                list.appendChild(li)

                li.addEventListener('click', () =>{
                    elem.value = li.textContent;
                    list.textContent = '';
                })
            })
        }
    }
})  