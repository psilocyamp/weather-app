let currrentTime = new Date();
let months = [
  "Janurary",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let month = months[currrentTime.getMonth()];
let date = currrentTime.getDate();
let year = currrentTime.getFullYear();

let day = days[currrentTime.getDay()];
let hour = currrentTime.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = currrentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let time = document.querySelector("#current-time");
let currentDate = document.querySelector("#current-date");

time.innerHTML = `${day} ${hour}:${minutes}`;
currentDate.innerHTML = `${month} ${date}, ${year}`;

let search = document.querySelector("#search-form");
search.addEventListener("submit", handleSubmit);

function searchCity(city) {
  let apiKey = "ddf0440bcec2a49b426ccbeada3e4574";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input-city").value;
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = city;

  searchCity(city);
}
function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}