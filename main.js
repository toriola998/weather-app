const apiKey = config.SECRET_API_KEY;  //config is the object name, not file name(config.js) 
const input = document.querySelector('input');
const main = document.querySelector('main')

async function showCity() {
    let cityName = input.value
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    const res = await url.json()
    console.log(res)
        main.innerHTML = `<div class="info-wrap">
        <div class="info1">
            <p>${new Date().toDateString()}</p>
            <h1>${res.name}</h1>
            <h1>${Math.floor(res.main.temp - 273)} C</h1>
            <h1>${Math.floor(9/5 * (res.main.temp -273) + 32)} F</h1>
        </div>
        <div class="info2">
            <p>Country Code: ${res.sys.country}<p>
            <p>Humidity: ${res.main.humidity}</p>
            <p>Wind Pressure: ${res.main.pressure}</p>
            <p>Wind Speed: ${res.wind.speed}</p>
            <p>Wind Degree: ${res.wind.deg}</p>
            <p>latitude: ${res.coord.lat}</p>
            <p>longitude: ${res.coord.lon}</p>
        </div>
    </div>`
}

document.addEventListener("keyup", function(e) {
    if (e.code === 'Enter') {
        showCity()
        cityName = ""
    }
});