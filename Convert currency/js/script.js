const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); ///

    request.open('GET', 'js/current.json'); 
    /// Метод собирает настройки для будешего запроса
    /// Принимает в себя несколько аргументов (method, url, async, login, pass )
    /// method - 'GET' - получает данные от сервера  
    /// method - 'POST' - отправляет данные на сервер
    /// url - путь куда мы отрпавляем данные

    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    /// Устанавливает значение заголовка HTTP-запроса. Вы должны вызвать setRequestHeader() после open(), но перед send(). 
    /// Если данный метод вызывается несколько раз с одним и тем же заголовком, все значения объединяются в один заголовок запроса.
    /// 1 АРГУМЕНТ - Имя заголовка, значение которого будет установлено. - 'Content-type'
    /// 2 АРГУМЕНТ - Значение, заданное как тело заголовка. - 'application/json; charset=utf-8'

    request.send(/* ЗАПОЛНЯЕТСЯ ЕСЛИ ИСПОЛЬЗОВАЛИ АРГУМЕНТ POST */);
    /// Отправляет запрос. 

    /// СВОЙСТВА  XMLHttpRequest()
    /// status - показывает статус нашего запроса
    /// statusText - текстовое описание ответа от сервера
    /// response - ответ от сервера
    /// readyState - содержит текущее состояние нашего запроса 

/*      0	UNSENT	Объект был создан. Метод open() ещё не вызывался.
        1	OPENED	Метод open() был вызван.
        2	HEADERS_RECEIVED	Метод send() был вызван, доступны заголовки (headers) и статус.
        3	LOADING	Загрузка; responseText содержит частичные данные.
        4	DONE	Операция полностью завершена.
 */
    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response); /// ответ от сервера, то что хранится в файле
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });


});


inputUsd.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); 
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputRub.value = (+inputUsd.value * data.current.usd).toFixed(2);
        } else {
            inputRub.value = 'Что-то пошло не так';
        }
    });


});

