const container = document.querySelector('.container');
const searchbtn = document.querySelector('.searchbox button');
const weatherbox = document.querySelector('.weatherbox');
const weatherdetails = document.querySelector('.weatherdetails');
const error = document.querySelector('.notfound');

searchbtn.addEventListener('click',()=>{

    const APIkey = "262e8f771716c60b612ce7f1d49e7610";
    const city = document.querySelector('.inputarea').value;

    if(city == '')
    return;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response=>response.json()).then(json=>{



if(json.cod == '404'){
    weatherbox.classList.remove('active');
    weatherdetails.classList.remove('active');
    error.classList.add('active');
    return; 
}
    weatherbox.classList.add('active');
    weatherdetails.classList.add('active');
    error.classList.remove('active');
 




    const image = document.querySelector('.weatherbox img')
    const temp = document.querySelector('.weatherbox .temperature')
    const des = document.querySelector('.weatherbox .des')
    const humidity = document.querySelector('.humidity')
    const wind = document.querySelector('.wind')

    

    switch(json.weather[0].main){
        case "Clear":
            image.src= "images/clear-sky.png";
            break;

        case "Rain":    
            image.src= "images/heavy-rain.png";
            break;

        case "Snow":
            image.src= "images/snowy.png";
            break;

        case "Clouds":
            image.src= "images/cloud.png";
            break;

            
        case "Mist":
            image.src= "images/mist.png";
            break;

        case "Haze":
            image.src= "images/haze.png";
            break;

        default:
            image.src= "images/cloudy.png";
    }
    temp.innerHTML = `Temperature: ${parseInt(json.main.temp)}&deg;C`;
    des.innerHTML = `${json.weather[0].description}`;
    humidity.innerHTML = `${json.main.humidity}%`;
    wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
}); 

})