const API_KEY='054c926b69b2bb02b2e36901949a6426';

const form=document.querySelector('form');
const weatherData=document.querySelector('.weather-data');
const main=document.getElementById('main--area')
const searchEl=document.querySelector('.search');
const kelvinToCelcius=function(K){
    return  K-273.15;
};

const generateMarkup=function(data){
    const markUp=`
    <div class="weather">
    <div class="temp">
    ${data.weather.map(weather=>{
        return `<img src="images/${weather.main}.png" class="temp--img">`
    })}
        
        <p class="temp--text">${kelvinToCelcius(data.main.temp).toFixed(2)}°C</p>
        <p class="city">${data.name}</p>
    </div>
</div>
<div class="details">
 <div class="col">
    <img src="images/humidity.png" class="humidity--img">
    <div class="humidity-details">
     <p class="humidity--percent">${data.main.humidity}%</p>
     <p class="humidity--text">Humidity</p>
   </div>
 </div>
 <div class="col">
    <img src="images/wind.png" class="windspeed--img">
    <div class="windspeed-details">
     <p class="windspeed--speed">${data.wind.speed} km/h</p>
     <p class="windspeed--text">windspeed</p>
  </div>
</div>
</div>
    `;
    main.style.height=Number.parseFloat(main.getBoundingClientRect().height)+350+'px';
    weatherData.insertAdjacentHTML('afterbegin',markUp);
    
 
// main.style.height=Number.parseFloat(getComputedStyle(main).height)+350+'px';

};
const getWeatherData=async function(location){
    try{
    const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
    const data=await res.json();
    console.log(data);
    generateMarkup(data);
    }catch(err){
        alert(err.message)
    }
}
// getWeatherData('australia');

form.addEventListener('submit',function(e){
    e.preventDefault();
   const searchValue=searchEl.value;
   getWeatherData(searchValue);
});
