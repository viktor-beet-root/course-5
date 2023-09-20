function myAjax(options, callback, data) {
    const xhr = new XMLHttpRequest();

    xhr.responseType = options.type ? options.type : 'json';

    // xhr.onreadystatechange = () => {
    //     // UNSENT = 0; исходное состояние
    //     // OPENED = 1; вызван метод open
    //     // HEADERS_RECEIVED = 2; получены заголовки ответа
    //     // LOADING = 3; ответ в процессе передачи (данные частично получены)
    //     // DONE = 4; запрос завершён
    //     // console.log(xhr.readyState, xhr.status);
    //     // console.log(xhr.readyState)
    //     if (xhr.readyState === 4 && xhr.status < 400) {
    //         console.log(xhr.response)
    //     } else if (xhr.readyState === 4 && xhr.status >= 400) {
    //         console.error(xhr.status)
    //     }
    // };

    xhr.onload = () => {
        if (xhr.status < 400) {
            //JSON.parse
            if (typeof callback === 'function') callback(xhr.response);
        } else {
            console.error(xhr.status);
        }

    }

    xhr.onerror = (e) => {
        console.error(e);
    }

    xhr.onprogress = (e) => {
        if (e.lengthComputable) {
            console.log(`Loaded ${e.loaded} to ${e.total}`)
        } else {
            console.log(`Loaded ${e.loaded}`)
        }
    }

    const method = options.method ? options.method : 'GET';

    xhr.open(method, options.url);

    if (method === 'GET') {
        xhr.send();
    } else if (method === 'POST') {
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(toJson(data));
    }
}

function toJson(data) {
    return JSON.stringify(data);
}

export default myAjax;
