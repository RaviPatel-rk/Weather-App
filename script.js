const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9a284bf484mshfc7578ff75f81a8p1ad812jsnbf8d5a2b4603',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = async (city) => {
  try {
    // Adjust the URL to include the city parameter
    const cityNameElement = document.getElementById('cityName');
      cityNameElement.innerHTML = city;

      const cityUrl = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
      const response = await fetch(cityUrl, options);
      const result = await response.json();
    // Check if the result has the expected structure before accessing properties
    if (result) {
      document.getElementById('temp').textContent = result.temp;
      document.getElementById('min_temp').textContent = result.min_temp;
      document.getElementById('max_temp').textContent = result.max_temp;

      // Pro Card
      document.getElementById('cloud_pct').textContent = result.cloud_pct;
      document.getElementById('feels_like').textContent = result.feels_like;
      document.getElementById('humidity').textContent = result.humidity;
      document.getElementById('wind_speed').textContent = result.wind_speed;

      // Enterprise Card
      document.getElementById('wind_degrees').textContent = result.wind_degrees;
      document.getElementById('sunrise').textContent = result.sunrise;
      document.getElementById('sunset').textContent = result.sunset;

      console.log(result);
    } else {
      console.error("Invalid result format");
    }
  } catch (error) {
    console.error(error);
  }
};

const submit = document.getElementById("submit");
const cityInput = document.getElementById("city");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const cityValue = cityInput.value;
  if (cityValue) {
    getWeather(cityValue);
  } else {
    console.error("City input is empty");
  }
});


getWeather("Delhi");