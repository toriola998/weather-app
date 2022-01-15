const apiKey = config.SECRET_API_KEY;  //config is the object name, not file name(config.js) 
const input = document.querySelector('input')

function showCity() {
    let cityName = input.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    .then( (res) => {
        console.log(res.json())
    })
    .catch((err) => {console.log(err)})
}


document.addEventListener("keyup", function(e) {
    if (e.code === 'Enter') {
        showCity()
        cityName = ""
    }
});