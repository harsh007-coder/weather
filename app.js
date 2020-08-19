window.addEventListener('load',() => {
    let long;
    let lat;
 let temperatureDescription = document.querySelector('.temperature-description')
 let temperatureDegree = document.querySelector('.temperature-degree')
 let temperatureSection = document.querySelector('.temperature')
 let locationtimezone = document.querySelector('.location-timezone')
 let tempIcon = document.getElementById('temp-icon')
 let iconFile;

 if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {  
        long =  position.coords.longitude; 
        lat = position.coords.latitude;

   const proxy = 'https://cors-anywhere.herokuapp.com/' 
   const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ba90859e5c4692e6a444aaab756fd922`
    // const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
    
   console.log(api)
   fetch(api)
   .then(response =>{
       return response.json();
   })
   .then(data => {
    
    const {name} = data;
    const {feels_like} = data.main;
    const {id, main} = data.weather[0];
    
    locationtimezone.textContent = name;
    temperatureDescription.textContent = main;
    temperatureDegree.textContent = Math.round(feels_like - 273);
    console.log(data);

    if (id < 250){
        tempIcon.src ='./IMAGES/thundercloud.png'
    }
    else if(id < 550){
        tempIcon.src -'./IMAGES/rainy.png'
    }
    else if(id < 650){
        tempIcon.src -'https://library.kissclipart.com/20180831/kxq/kissclipart-weather-symbols-clipart-weather-forecasting-clip-a-c178cc9ed1174847.jpg'
    }
    else if(id > 800){
        tempIcon.src -'./IMAGES/cloud.png'
    }
    else if(id === 800){
        tempIcon.src -'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png'
    }
    else if(id < 800){
        tempIcon.src -'./IMAGES/sun.png'
    }
   });
 });
 }
 
});