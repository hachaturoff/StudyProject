'use strict';

const link = document.querySelectorAll('a');
const tab = document.querySelectorAll('.tab');


function hideTabs() {
    tab.forEach(item => {
        item.classList.remove('active')
    })
}

function showTabs( i = 0 ) {
    tab[i].classList.add('active')
}

link.forEach((item, i) => {
    item.addEventListener('click', () =>{
        hideTabs()
        showTabs(i)
    })
})

hideTabs()
showTabs()



























// function hideTab() {
//     tab.forEach(item => {
//         item.classList.remove('active')        
//     })
// }

// function showTab(i = 0) {
    
//     tab[i].classList.add('active')
// }

// hideTab()
// showTab()

// tab.addEventListener('click', (e) => {
//     e.preventDefault()
//     const target = e.target; 
//     link.forEach((item , i) => {
//         if (item == target) {
//             hideTab()
//             showTab(i)
//         }   
//     })   
// })


