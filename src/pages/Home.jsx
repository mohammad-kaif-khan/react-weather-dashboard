
import Search from "../components/Search";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Search />
      <WeatherCard />
    </div>
  );
};

export default Home;