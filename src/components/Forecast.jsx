

import { useSelector } from "react-redux";

const Forecast = () => {
  const weather = useSelector((state) => state.weather.data);

  if (!weather || !weather.daily) {
    return null;
  }

  const dates = weather.daily.time;
  const maxTemps = weather.daily.temperature_2m_max;
  const minTemps = weather.daily.temperature_2m_min;

  const forecastIcons = [
    "☀️",
    "🌤️",
    "☁️",
    "🌦️",
    "🌧️",
    "⛅",
    "☀️",
  ];

  return (
    <div className="mt-10 w-full max-w-6xl px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        7-Day Forecast
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {dates.map((date, index) => (
          <div
            key={date}
            className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition"
          >
            <p className="font-semibold">
              {new Date(date).toLocaleDateString(
                "en-US",
                {
                  weekday: "short",
                }
              )}
            </p>

            <div className="text-5xl my-3">
              {forecastIcons[index % 7]}
            </div>

            <p className="font-bold text-lg">
              {maxTemps[index]}°C
            </p>

            <p className="text-sm opacity-80">
              {minTemps[index]}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;