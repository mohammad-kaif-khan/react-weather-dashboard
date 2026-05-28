


// import { useSelector } from "react-redux";

// const WeatherCard = () => {
//   const weather = useSelector((state) => state.weather.data);

//   if (!weather) {
//     return (
//       <p className="text-center mt-10 text-white/80">
//         Search city to see weather 🌍
//       </p>
//     );
//   }

//   return (
//     <div className="flex justify-center mt-10">
//       <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-80 text-center">
        
//         <h2 className="text-2xl font-bold mb-2">
//           {weather.name}, {weather.country}
//         </h2>

//         <div className="text-4xl font-bold text-yellow-300">
//           {weather.current_weather.temperature}°C
//         </div>

//         <p className="mt-2">
//           💨 Wind: {weather.current_weather.windspeed} km/h
//         </p>

//         <p>
//           📊 Code: {weather.current_weather.weathercode}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default WeatherCard;

import { useSelector } from "react-redux";

const WeatherCard = () => {
  const weather = useSelector((state) => state.weather.data);

  if (!weather) {
    return (
      <p className="text-center mt-10 text-white/80">
        Search city to see weather 🌍
      </p>
    );
  }

  const temp = weather.current_weather.temperature;
  const weatherCode = weather.current_weather.weathercode;

  let icon = "☀️";

  if (weatherCode >= 1 && weatherCode <= 3) {
    icon = "☁️";
  }

  if (weatherCode >= 51) {
    icon = "🌧️";
  }

  const currentDate = new Date().toLocaleString();

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-full max-w-sm text-center">

        <div className="text-6xl mb-3">
          {icon}
        </div>

        <h2 className="text-2xl font-bold mb-2">
          {weather.name}, {weather.country}
        </h2>

        <p className="text-sm text-white/80 mb-4">
          {currentDate}
        </p>

        <div className="text-5xl font-bold text-yellow-300">
          {temp}°C
        </div>

        <div className="mt-4 space-y-2">
          <p>
            💨 Wind Speed:{" "}
            {weather.current_weather.windspeed} km/h
          </p>

          <p>
           📊 Weather Code: {weatherCode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

