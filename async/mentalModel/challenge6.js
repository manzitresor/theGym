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
    const lon = countries[0].latlng[1];
    const lat = countries[0].latlng[0];
    const country = countries[0].name.common;
    const city = countries[0].capital;
    console.log(`COUNRTY: ${country}`);
    console.log(`CAPITAL: ${city}`);

    const fetchWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    const resp  = await fetchWeather.json();
    const data = await resp;
    const temp = data.current_weather.temperature;
    console.log(`TEMPERATURE: ${temp}°C`);
}

fetchWeather();
