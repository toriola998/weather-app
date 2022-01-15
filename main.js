const apiKey = config.SECRET_API_KEY;
console.log(apiKey)

fetch('https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=a49eee2baed2b1b29d1897bbb49b2f66')
.then( (res) => {
    console.log(res.json())
})
.catch((err) => {console.log(err)})
