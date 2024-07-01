const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/todos/1';


function fetchToDo() {
    xhr.open('GET',url,true);
    xhr.onreadystatechange = async function() {
        try {
            if(xhr.readyState == 4 && xhr.status == 200) {
               const data = await JSON.parse(xhr.responseText);
               console.log(data);
            } else {
                throw new Error()
            }
        } catch(eror) {
            console.log(`Failed to Fetch with status: ${xhr.status}`)
        }
    }
    xhr.send();
}

fetchToDo();