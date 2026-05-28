


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

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-80 text-center">
        
        <h2 className="text-2xl font-bold mb-2">
          {weather.name}, {weather.country}
        </h2>

        <div className="text-4xl font-bold text-yellow-300">
          {weather.current_weather.temperature}°C
        </div>

        <p className="mt-2">
          💨 Wind: {weather.current_weather.windspeed} km/h
        </p>

        <p>
          📊 Code: {weather.current_weather.weathercode}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;