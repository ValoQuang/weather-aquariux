import SearchBar from "./components/SearchBar";
import HistoryList from "./components/HistoryList";
import WeatherInfo from "./components/WeatherInfo";
import { useEffect, useState, useMemo } from "react";
import { fetchWeatherData } from "./utils/fetchWeatherData";

export type Nullable<T> = T | null;

function App() {
  const [location, setLocation] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Nullable<any>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Nullable<any>>(null);
  const [historyData, setHistoryData] = useState<string[] | null>([]);

  const handleSearch = async () => {
    setLoading(true);
    const trimmedLocation = location.trim();
    const apiKey = process.env.WEATHER_API_KEY;

    if (!trimmedLocation) {
      setError("Please enter location or country");
      setLoading(false);
    } else {
      const { data, error } = await fetchWeatherData(trimmedLocation, apiKey);
      if (data) {
        setWeatherData(data);
        setError(null);
      }
      if (!data) setError(error);
      if (!error && data) handleHistoryData(data.name);
      setLoading(false);
    }
  };

  const handleClear = () => {
    setLocation("");
    setWeatherData(null);
  };

  const handleHistoryData = (newItem: string) => {
    if (historyData === null) {
      setHistoryData([newItem]);
    } else {
      setHistoryData([newItem, ...historyData]);
    }
  };

  useEffect(() => {
    if (loading) {
      <div>Loading ...</div>;
    }
    if (weatherData && error === null) {
      setLoading(false);
    }
  }, [weatherData, location]);

  const memoizedWeatherInfo = useMemo(
    () => <WeatherInfo error={error} weatherData={weatherData} />,
    [weatherData, error]
  );

  return (
    <div className="overflow-auto mx-48 bg-slate-100 h-screen border-solid border-[1px] rounded-md border-black px-10 flex flex-col gap-10">
      <SearchBar
        location={location}
        setLocation={setLocation}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />
      {memoizedWeatherInfo}
      <HistoryList setHistoryData={setHistoryData} historyData={historyData} />
    </div>
  );
}

export default App;
