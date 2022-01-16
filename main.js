const apiKey = config.SECRET_API_KEY;  //config is the object name, not file name(config.js) 
const input = document.querySelector('input');
const main = document.querySelector('.main');
const errorPage = document.querySelector('.error');

async function showCity() {
    let cityName = input.value
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    const res = await url.json()
    //console.log(res)
    if (res.cod === 200) {
        renderCityDetails(res);
    } else {
       showErrorPage();
    }
       
}

//WHEN I CLICK ON ENTER KEY TO SEARCH FOR CITY DETAILS
document.addEventListener("keyup", function(e) {
    if (e.code === 'Enter') {
        showCity();
        cityName = ""
    }
});

//SHOW CITY DETAILS
function renderCityDetails (res) {
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

//WHEN THERE'S AN ERROR, SHOW THIS PAGE
function showErrorPage () {
    //errorPage.firstElementChild.style.display = 'flex'
    errorPage.innerHTML = `<div class="error-page">
    <div>
        <p class="oops">Oops! An error occured</p>
        <h2>404</h2>
        <p>Sorry, the page you're looking for doesn't exist</p>
        <button id="btn">Back to homepage</button>
    </div>
</div>`
}

//WHEN BUTTON ON ERROR PAGE IS CLICKED, GO BACK TOT HOME PAGE
function backToHomepage() {
    errorPage.addEventListener('click', (e) => {
        if(e.target.id === 'btn') {
            console.log('An error occurred')
            errorPage.innerHTML = ''
            input.value = ''
        }
    })
}

backToHomepage()