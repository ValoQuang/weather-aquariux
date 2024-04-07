import { convertTemperature } from "../utils/convertTemperature";
import { IoWarning } from "react-icons/io5";
import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";
import { WeatherInfoType } from "../types/types";
import { getTimeData } from "../utils/getTimeData";

const WeatherInfo = ({
  weatherData,
  error,
  loading,
  darkMode,
}: WeatherInfoType) => {
  const convertTempMin =
    weatherData && convertTemperature(weatherData.main.temp_min);
  const convertTempMax =
    weatherData && convertTemperature(weatherData.main.temp_max);
  const displayTime = weatherData && getTimeData(weatherData.timezone);

  return (
    <div
      style={{
        borderColor: darkMode ? "white" : "black",
        transition: "background-color 1s ease",
      }}
      className="border-[1px] px-10 flex flex-col items-center w-full h-full max-lg:text-sm max-lg:px-1 rounded-3xl"
    >
      {loading ? (
        <>Loading ...</>
      ) : (
        <>
          {error && (
            <div className="bg-red-400 gap-1 items-center flex p-2 rounded-md">
              <IoWarning /> {error}
            </div>
          )}
          {/* Display weather information here */}
          {weatherData && !error && (
            <div className="flex justify-between gap-5">
              <div className="flex flex-col text-sm gap-5">
                <p>
                  Weather for {weatherData.name}, {weatherData.sys.country}
                </p>
                <div className="text-3xl font-extrabold">
                  {weatherData.weather[0].main}
                </div>
                <div className="flex flex-col gap-2">
                  <p>City: {weatherData.name}</p>
                  <p>Description: {weatherData.weather[0].description}</p>
                  <p>
                    Temperature: {convertTempMin} °C ≈ {convertTempMax} °C
                  </p>
                  <p>Humidity: {weatherData.main.humidity} %</p>
                  <p>Time at local position: {displayTime}</p>
                </div>
              </div>

              <img
                className="max-lg:w-32 max-lg:h-32 w-48 h-48"
                src={weatherData.weather[0].main ? cloud : sun}
                alt="sun"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WeatherInfo;
