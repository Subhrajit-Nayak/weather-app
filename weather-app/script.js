// const apikey = "e650b1ced1b33c20c5bd25c90034efec";   
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

// async function checkWeather(city) {
//     try {
//         const response = await fetch(apiUrl + city + `&appid=${apikey}`);
//         let data = await response.json();
//         console.log(data);

//         if (data.cod != 200) {
//             document.querySelector(".city").innerHTML = "City not found";
//             document.querySelector(".temp").innerHTML = "--°C";
//             document.querySelector(".humidity").innerHTML = "--%";
//             document.querySelector(".wind").innerHTML = "-- km/h";
//             return;
//         }

//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


//         if(data.weather[0].main == "clouds"){
//             weatherIcon.src = "images/clouds.png";
//         }
//         else if(data.weather[0].main == "clear"){
//             weatherIcon.src = "images/clear.png";
//         }
//         else if(data.weather[0].main == "rain"){
//             weatherIcon.src = "images/rain.png";
//         }
//         else if(data.weather[0].main == "Drizzle"){
//             weatherIcon.src = "images/clear.png";
//         }
//         else if(data.weather[0].main == "Mist"){
//             weatherIcon.src = "images/mist.png";
//         }


//     } catch (error) {
//         console.error("Error fetching weather:", error);
//     }
// }

// // Works  clicks button
// searchBtn.addEventListener("click", () => {
//     if (searchBox.value.trim() !== "") {
//         checkWeather(searchBox.value);
//     }
// });




const apikey = "e650b1ced1b33c20c5bd25c90034efec";   
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
        let data = await response.json();
       

        if (data.cod != 200) {
            document.querySelector(".city").innerHTML = "City not found";
            document.querySelector(".temp").innerHTML = "--°C";
            document.querySelector(".humidity").innerHTML = "--%";
            document.querySelector(".wind").innerHTML = "-- km/h";
            weatherIcon.src = "images/404.png"; // optional error icon
            return;
        }

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // normalize condition (lowercase)
        let condition = data.weather[0].main.toLowerCase();

        if (condition === "clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (condition === "clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (condition === "rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (condition === "drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (condition === "mist") {
            weatherIcon.src = "images/mist.png";
        }
        else {
            weatherIcon.src = "images/default.png"; 
        }


        document.querySelector(".weather").style.display = "block";

    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

// Click button to search
searchBtn.addEventListener("click", () => {
    if (searchBox.value.trim() !== "") {
        checkWeather(searchBox.value);
    }
});

// Press Enter key works
searchBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && searchBox.value.trim() !== "") {
        checkWeather(searchBox.value);
    }
});
