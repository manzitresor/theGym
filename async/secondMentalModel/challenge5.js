const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/todos';

function fetchToDo() {
    const payload = JSON.stringify({
        title: 'CUSTOM TODO',
        completed: false,
    });

    xhr.open('POST', url, true);
    // xhr.setRequestHeader('User-Agent', 'MyCustomUserAgent');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
            } catch (error) {
                console.error('Error parsing JSON:', error.message);
            }
        } else {
            console.error(`Failed to fetch: ${xhr.status}`);
        }
    };

    xhr.send(payload);
}

fetchToDo();
