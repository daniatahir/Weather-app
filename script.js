const URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="f386957bbb3c4183550ddcd3b93faae7";

let cityName=document.querySelector(".city");
let temp=document.querySelector(".temp");
let humidity=document.querySelector(".percent");
let windSpeed=document.querySelector(".value");
let input=document.querySelector(".cityInput input");
let searchBtn=document.querySelector(".cityInput button");
let country=document.querySelector(".countryName");

    async function checkWeather(city){
        const response=await fetch(URL+city+`&appid=${apiKey}`);
        let data=await response.json();
     
        if (response.status==404){
            cityName.innerHTML="Invalid city name";
        }
        else{
        cityName.innerHTML=data.name;
        temp.innerHTML=Math.round(data.main.temp) + "°C";
        humidity.innerHTML=data.main.humidity + "%";
        windSpeed.innerHTML=data.wind.speed +"km/h";
        country.innerHTML=data.sys.country;


        if(data.weather[0].main=="Smoke"){
            document.querySelector(".container").style.backgroundImage="url('smoke.jpg')";
            document.querySelector(".container").style.backgroundSize="cover";
            document.querySelector(".pic img").src="smoke-icon.png";
            document.querySelector(".condition").innerHTML=data.weather[0].main;
        }
        else if(data.weather[0].main=="Rain"){
            document.querySelector(".container").style.backgroundImage="url('rain.jpg')";
            document.querySelector(".container").style.backgroundSize="cover";
            document.querySelector(".pic img").src="rain-icon.png";
            document.querySelector(".condition").innerHTML=data.weather[0].main;
        }
        else if(data.weather[0].main=="Clear"){
            document.querySelector(".container").style.backgroundImage="url('clear.jpg')";
            document.querySelector(".container").style.backgroundSize="cover";
            document.querySelector(".pic img").src="clear-icon.png";
            document.querySelector(".condition").innerHTML=data.weather[0].main;
        }
        else if(data.weather[0].main=="Clouds"){
            document.querySelector(".container").style.backgroundImage="url('clouds.jpg')";
            document.querySelector(".container").style.backgroundSize="cover";
            document.querySelector(".pic img").src="cloud-icon.png";
            document.querySelector(".condition").innerHTML=data.weather[0].main;
        }
        else if(data.weather[0].main=="Mist"){
            document.querySelector(".container").style.backgroundImage="url('mist.jpg')";
            document.querySelector(".container").style.backgroundSize="cover";
            document.querySelector(".pic img").src="mist-icon.png";
            document.querySelector(".condition").innerHTML=data.weather[0].main;
        }
        else if(data.weather[0].main=="Drizzle"){
            document.querySelector(".container").style.backgroundImage="url('drizzle.jpg')";
            document.querySelector(".container").style.backgroundSize="cover";
            document.querySelector(".pic img").src="rain-icon.png";
            document.querySelector(".condition").innerHTML=data.weather[0].main;
        
        }
    }
        console.log(data);
    }

 searchBtn.addEventListener("click",()=>{
        checkWeather(input.value);
        input.value="";
    })

    input.addEventListener("keypress",(event)=>{
        if(event.key=="Enter"){
            checkWeather(input.value);
        input.value="";
        }
    })
    




