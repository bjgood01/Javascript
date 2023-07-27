// navigator.geolocation.getCurrentPosition()
//-> 이걸 부르면 브라우저에서 위치 좌표를 준다
// getCurrentPosition은 인자가 2개가 필요한데, 하나는 실행될 함수,
// 나머지 하나는 에러가 발생했을때 실행될 함수

const API_KEY = "655ac366cb17c73e32dad428979ffdd6";


function onGeoOk(position) {
    // 위도
    const lat = position.coords.latitude;
    // 경도
    const lng = position.coords.longitude;
    console.log('You live in ', lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    // 서버의 응답을 기다릴때 then을 사용
    fetch(url)
        .then(response => response.json())
        .then(data =>  {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name; 
        weather.innerText = data.weather[0].main;
    
    });  

}
function onGeoError() {
    alert("can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);