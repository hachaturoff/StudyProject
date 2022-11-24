'use strict';

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

console.log(allTag)

function findTag() {
    input.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            allTag.forEach(item => {
                
                if(input.value == item.name) {
                    textarea.value = item.descr
                }
            })
        }
    })
   
}

findTag()

