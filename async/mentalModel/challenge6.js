// const countries = (name) => new Promise((resolve,reject)=>{
//     const fetchData = fetch(`https://restcountries.com/v3.1/name/${name}`).then( res => res.json())
//     resolve(fetchData);
// })

// countries('rwanda')
//             .then(value => console.log(value));

async function getCountry(name) {
    const fetchCountry = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const resp = await fetchCountry.json();
    const data = await resp;
    return data;
}


async function fetchWeather() {
    const countries = await getCountry('rwanda');
    const lon = countries[0].latlng[1]
    const lat = countries[0].latlng[0]
    const fetchWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lon}&longitude=${lat}&current_weather=true.`);
    const resp  = await fetchWeather.json();
    const data = await resp;
    console.log(data);
}

fetchWeather();
