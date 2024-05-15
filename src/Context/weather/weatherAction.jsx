export const fetchWeather = async (topic) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=2d374ae7f534467daf660256240204 &q=${topic}&aqi=yes`
  );
  const data = await response.json();
  return data;
};


export default fetchWeather
