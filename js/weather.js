

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  // console.log(position);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

console.log(url)

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    });
}
function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
//navigator.geolocation.getCurrentPosition(위치받는함수, 에러났을때 함수)













//API는 다른서버와 이야기할 수 있는 방법. 여기서는 open weather map 서버와 이야기한다.
