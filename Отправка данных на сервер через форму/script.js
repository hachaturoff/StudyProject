'use strict';

let form = document.querySelector('form')
let button = document.querySelector('button')
let input = document.querySelector('input')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    
    // request.setRequestHeader('Content-type', 'multipart/form-data');
    const formData = new FormData(form);

    request.send(formData);

    request.addEventListener('load', () => {
        if(request.status === 200) {
            console.log(request.response);

            // const data = JSON.parse(request.response);
            // input.value = data.add.person;
        } else {
            input.value = 'что то не то'
        }
    })
})