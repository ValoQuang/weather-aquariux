import SearchBar from "./components/SearchBar";
import HistoryList from "./components/HistoryList";
import WeatherInfo from "./components/WeatherInfo";
import { useEffect, useState, useMemo } from "react";
import { fetchWeatherData } from "./utils/fetchWeatherData";
import { HistoryDataType, Nullable } from "./types/types";

function App() {
  const [location, setLocation] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Nullable<any>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Nullable<string>>(null);
  const [historyData, setHistoryData] = useState<HistoryDataType[] | null>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleSearch = async (location: string) => {
    setLoading(true);
    const trimmedLocation = location.trim();
    const apiKey = process.env.WEATHER_API_KEY;
    const searchTime = new Date().toLocaleString();

    if (!trimmedLocation) {
      setError("Please enter location or country");
      setLoading(false);
    } else {
      const { data, error } = await fetchWeatherData(trimmedLocation, apiKey);
      if (data) {
        setWeatherData(data);
        setError(null);
        setLocation("");
      }
      if (!data) setError(error);
      if (!error && data)
        handleHistoryData({
          name: data.name,
          code: data.sys.country,
          searchedAt: searchTime,
        });
      setLoading(false);
    }
  };

  const handleClear = () => {
    setLocation("");
    setError(null);
  };

  const handleHistoryData = (newItem: HistoryDataType) => {
    if (historyData === null) {
      setHistoryData([newItem]);
    } else {
      setHistoryData([newItem, ...historyData]);
    }
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const memoizedWeatherInfo = useMemo(
    () => (
      <WeatherInfo
        darkMode={darkMode}
        loading={loading}
        error={error}
        weatherData={weatherData}
      />
    ),
    [weatherData, error, darkMode]
  );

  return (
    <div
      style={{
        backgroundColor: !darkMode ? "white" : "#374151",
        color: !darkMode ? "#374151" : "white",
        transition: "background-color 1s ease",
        fontFamily: "Open Sans, sans-serif",
      }}
    >
      <div
        style={{
          borderColor: darkMode ? "white" : "#374151",
        }}
        className="overflow-auto items-center mx-72 max-lg:mx-0 h-screen border-solid border-[1px] rounded-md px-10 flex flex-col gap-10"
      >
        <SearchBar
          location={location}
          setLocation={setLocation}
          handleSearch={handleSearch}
          handleClear={handleClear}
          handleDarkMode={handleDarkMode}
          darkMode={darkMode}
        />
        {memoizedWeatherInfo}
        <HistoryList
          loading={loading}
          handleSearch={handleSearch}
          setHistoryData={setHistoryData}
          historyData={historyData}
        />
      </div>
    </div>
  );
}

export default App;
