
// import Search from "../components/Search";
// import WeatherCard from "../components/WeatherCard";

// const Home = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <Search />
//       <WeatherCard />
//     </div>
//   );
// };

// export default Home;



import Search from "../components/Search";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="text-4xl font-bold mt-8 text-center">
        🌤 Weather Dashboard
      </h1>

      <p className="text-white/80 text-center mt-2">
        Search any city and get live weather updates
      </p>

      <Search />
      <WeatherCard />

      <footer className="mt-12 mb-6 text-center text-white/70 text-sm">
        Built with React + Redux Toolkit + Tailwind CSS
      </footer>
    </div>
  );
};

export default Home;