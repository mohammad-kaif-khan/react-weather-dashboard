


// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { fetchWeather } from "../services/weatherApi";
// import { setWeather } from "../redux/weatherSlice";

// const Search = () => {
//   const [city, setCity] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const dispatch = useDispatch();

//   const handleSearch = async () => {
//     if (!city.trim()) {
//       setError("Enter city name");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const data = await fetchWeather(city);
//       dispatch(setWeather(data));

//       setLoading(false);
//     } catch (err) {
//       setLoading(false);
//       setError("City not found");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center mt-10 gap-4">
      
//       <div className="flex gap-2 bg-white/20 backdrop-blur-md p-3 rounded-xl shadow-lg">
//         <input
//           className="px-4 py-2 rounded-lg text-black outline-none w-64"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Search city..."
//         />

//         <button
//           onClick={handleSearch}
//           className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-300"
//         >
//           Search
//         </button>
//       </div>

//       {loading && <p className="text-white">Loading...</p>}
//       {error && <p className="text-red-200">{error}</p>}
//     </div>
//   );
// };

// export default Search;



// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchWeather } from "../services/weatherApi";
// import { setWeather } from "../redux/weatherSlice";

// const Search = () => {
//   const [city, setCity] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [recentSearches, setRecentSearches] = useState([]);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("recentCities")) || [];
//     setRecentSearches(saved);
//   }, []);

//   const saveRecentSearch = (cityName) => {
//     let cities =
//       JSON.parse(localStorage.getItem("recentCities")) || [];

//     cities = [
//       cityName,
//       ...cities.filter(
//         (c) => c.toLowerCase() !== cityName.toLowerCase()
//       ),
//     ].slice(0, 5);

//     localStorage.setItem(
//       "recentCities",
//       JSON.stringify(cities)
//     );

//     setRecentSearches(cities);
//   };

//   const handleSearch = async (searchCity = city) => {
//     if (!searchCity.trim()) {
//       setError("Please enter a city name");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const data = await fetchWeather(searchCity);

//       dispatch(setWeather(data));

//       saveRecentSearch(searchCity);

//       setLoading(false);
//     } catch (err) {
//       setLoading(false);
//       setError("City not found. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center mt-10 gap-4 px-4">
//       <div className="flex flex-col sm:flex-row gap-2 bg-white/20 backdrop-blur-md p-3 rounded-xl shadow-lg w-full max-w-md">
//         <input
//           className="px-4 py-2 rounded-lg text-black outline-none flex-1"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               handleSearch();
//             }
//           }}
//           placeholder="Search city..."
//         />

//         <button
//           onClick={() => handleSearch()}
//           className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-300 transition"
//         >
//           Search
//         </button>
//       </div>

//       {loading && (
//         <div className="flex items-center gap-2 text-white">
//           <div className="h-5 w-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//           <span>Loading weather...</span>
//         </div>
//       )}

//       {error && (
//         <div className="bg-red-500/20 border border-red-400 text-red-100 px-4 py-2 rounded-lg">
//           {error}
//         </div>
//       )}

//       {recentSearches.length > 0 && (
//         <div className="text-center">
//           <h3 className="font-semibold mb-2 text-white">
//             Recent Searches
//           </h3>

//           <div className="flex flex-wrap gap-2 justify-center">
//             {recentSearches.map((item, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setCity(item);
//                   handleSearch(item);
//                 }}
//                 className="bg-white/20 px-3 py-1 rounded-full text-sm hover:bg-white/30"
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;


import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchWeather,
  fetchWeatherByCoords,
} from "../services/weatherApi";
import { setWeather } from "../redux/weatherSlice";

const Search = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedCities =
      JSON.parse(localStorage.getItem("recentCities")) || [];
    setRecentSearches(savedCities);
  }, []);

  const saveRecentSearch = (cityName) => {
    let cities =
      JSON.parse(localStorage.getItem("recentCities")) || [];

    cities = [
      cityName,
      ...cities.filter(
        (item) =>
          item.toLowerCase() !== cityName.toLowerCase()
      ),
    ].slice(0, 5);

    localStorage.setItem(
      "recentCities",
      JSON.stringify(cities)
    );

    setRecentSearches(cities);
  };

  const handleSearch = async (searchCity = city) => {
    if (!searchCity.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await fetchWeather(searchCity);

      dispatch(setWeather(data));

      saveRecentSearch(searchCity);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("City not found. Please try again.");
    }
  };

  const handleLocationWeather = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const data = await fetchWeatherByCoords(
            position.coords.latitude,
            position.coords.longitude
          );

          dispatch(setWeather(data));
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError("Unable to fetch location weather");
        }
      },
      () => {
        setLoading(false);
        setError("Location permission denied");
      }
    );
  };

  return (
    <div className="flex flex-col items-center mt-10 gap-4 px-4 w-full">

      <div className="flex flex-col sm:flex-row gap-2 bg-white/20 backdrop-blur-md p-3 rounded-xl shadow-lg w-full max-w-md">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search city..."
          className="px-4 py-2 rounded-lg text-black outline-none flex-1"
        />

        <button
          onClick={() => handleSearch()}
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-300 transition"
        >
          Search
        </button>
      </div>

      <button
        onClick={handleLocationWeather}
        className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
      >
        📍 Use My Location
      </button>

      {loading && (
        <div className="flex items-center gap-2 text-white">
          <div className="h-5 w-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Loading weather...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-500/20 border border-red-400 text-red-100 px-4 py-2 rounded-lg">
          {error}
        </div>
      )}

      {recentSearches.length > 0 && (
        <div className="text-center">
          <h3 className="font-semibold mb-2 text-white">
            Recent Searches
          </h3>

          <div className="flex flex-wrap gap-2 justify-center">
            {recentSearches.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setCity(item);
                  handleSearch(item);
                }}
                className="bg-white/20 px-3 py-1 rounded-full text-sm hover:bg-white/30"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;