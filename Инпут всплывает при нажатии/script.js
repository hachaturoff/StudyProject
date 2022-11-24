'use strict';

const pi = document.querySelectorAll('p');
const list = document.querySelector('#list');
const button = document.querySelector('button');
const wrapper = document.querySelector('.wrapper');




// wrapper.addEventListener("click", function func(e)  {
//         let target = e.target;
//         const get = document.getElementsByTagName('input') 
        
//         if (get.length > 0) {
//             get[0].remove();
//             get[0].removeEventListener('click', func) 

//         }
        
//         if (get.length <= 0) {
//             if (target.tagName == "P" ) {                
//                 let inpute = document.createElement('input');
//                 inpute.className = 'absol';
                
//                 target.append(inpute);
//                 target.removeEventListener('click', func) 

//                 // inpute.addEventListener('keydown', () =>{
//                 //     target.textContent = inpute.value;
                    
//                 // })
//             }
           
//         }

       
//     })

    for (let elem of pi) {
        elem.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = elem.textContent;
            
            elem.textContent = '';
            elem.appendChild(input);
            
            input.addEventListener('blur', function() {
                elem.textContent = this.value;
                elem.addEventListener('click', func);
            });
            
            elem.removeEventListener('click', func);
        });
    }