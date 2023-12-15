const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9a284bf484mshfc7578ff75f81a8p1ad812jsnbf8d5a2b4603',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchData() {
    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Assuming the response is JSON
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
fetchData();