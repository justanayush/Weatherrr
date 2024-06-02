const city = document.querySelector("#search");
const btn = document.querySelector(".glass-icon");
const mainImg = document.querySelector(".main-img");
const description = document.querySelector(".weather-description");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humid");
const windSpeed = document.querySelector(".speed");
const cityLoc = document.querySelector(".city");
const app = document.querySelector(".weather-app");
const details = document.querySelector(".weather-details")
const loader = document.querySelector(".loader");
city.addEventListener('keypress', (e) =>{
    if (e.key == "Enter"){
        e.preventDefault();
        let cityName = city.value;
        showWeather(cityName);
    }
})
city.addEventListener('input', () =>{
    if(city.value.trim() === ""){
        btn.style.pointerEvents = "none";
    }else{
        btn.style.pointerEvents = "all";
    }
})
async function showWeather(cityName){
    const apiKey = "7511c9eacb05fa9126677a8483d8dd0a";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    loader.style.display = "block";
    if (response.status === 404){
        loader.style.display = "none";
        alert("Enter correct city name please !!!")
    }else{
        loader.style.display = "none";
        var data = await response.json();
        let weatherImg = data.weather[0].main;
        weatherImg = weatherImg.toLowerCase();
        console.log(weatherImg);
        mainImg.setAttribute('src', `images/${weatherImg}.png`)
        description.innerHTML = data.weather[0].description;
        temperature.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + " %";
        windSpeed.innerHTML = data.wind.speed + " km/hr"
        cityLoc.innerHTML = data.name + ", " + data.sys.country;
        app.style.width = "800px";
        details.style.display = "block";
    }

}

btn.addEventListener('click', ()=>{
    let cityName = city.value;
    showWeather(cityName);
})
