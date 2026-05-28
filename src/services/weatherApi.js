
// import axios from "axios";


// const getCoordinates = async (city) => {
//   const res = await axios.get(
//     `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
//   );

//   if (!res.data.results) {
//     throw new Error("City not found");
//   }

//   return {
//     lat: res.data.results[0].latitude,
//     lon: res.data.results[0].longitude,
//     name: res.data.results[0].name,
//     country: res.data.results[0].country,
//   };
// };


// export const fetchWeather = async (city) => {
//   const location = await getCoordinates(city);

//   const weatherRes = await axios.get(
//     `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true`
//   );

//   return {
//     name: location.name,
//     country: location.country,
//     current_weather: weatherRes.data.current_weather,
//   };
// };


import axios from "axios";

const getCoordinates = async (city) => {
  const res = await axios.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );

  if (!res.data.results) {
    throw new Error("City not found");
  }

  return {
    lat: res.data.results[0].latitude,
    lon: res.data.results[0].longitude,
    name: res.data.results[0].name,
    country: res.data.results[0].country,
  };
};

export const fetchWeather = async (city) => {
  const location = await getCoordinates(city);

  const weatherRes = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true`
  );

  return {
    name: location.name,
    country: location.country,
    current_weather: weatherRes.data.current_weather,
  };
};

export const fetchWeatherByCoords = async (
  latitude,
  longitude
) => {
  const weatherRes = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );

  return {
    name: "Current Location",
    country: "",
    current_weather: weatherRes.data.current_weather,
  };
};