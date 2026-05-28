


import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../services/weatherApi";
import { setWeather } from "../redux/weatherSlice";

const Search = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Enter city name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await fetchWeather(city);
      dispatch(setWeather(data));

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("City not found");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      
      <div className="flex gap-2 bg-white/20 backdrop-blur-md p-3 rounded-xl shadow-lg">
        <input
          className="px-4 py-2 rounded-lg text-black outline-none w-64"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city..."
        />

        <button
          onClick={handleSearch}
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-300"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-200">{error}</p>}
    </div>
  );
};

export default Search;