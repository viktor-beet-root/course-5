function myAjaxPromis(options, data) {
    return new Promise(
        (resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.responseType = options.type ? options.type : 'json';

            xhr.onload = () => {
                if (xhr.status < 400) {
                    resolve(xhr.response);
                } else {
                    reject(xhr);
                }
            }

            xhr.onerror = () => {
                reject(xhr);
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
    );
}

function toJson(data) {
    return JSON.stringify(data);
}

export default myAjaxPromis;
