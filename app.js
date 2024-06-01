const city = document.querySelector("#search");
const btn = document.querySelector(".glass-icon");
const mainImg = document.querySelector(".main-img")


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
    if (response.status === 404){
        console.log("error");
    }else{
        var data = await response.json();
        let weatherImg = data.weather[0].main;
        weatherImg = weatherImg.toLowerCase();
        console.log(weatherImg);
        mainImg.setAttribute('src', `images/${weatherImg}.png`)
    }

}

btn.addEventListener('click', ()=>{
    let cityName = city.value;
    console.log(cityName)
    showWeather(cityName);
})
