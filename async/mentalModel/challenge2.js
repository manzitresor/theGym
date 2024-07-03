
const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
  ];

  function fetchMultipleAPIs(apiUrls) {
    let fetchData = apiUrls.map(async (api) => {
        const response = await fetch(api);
        return await response.json();
    })
    return Promise.all(fetchData)
  }
  
  fetchMultipleAPIs(apiUrls)
    .then(results => {
      console.log('Combined Results:', results);
    })
    .catch(error => {
      console.log('Error:', error.message);
    });