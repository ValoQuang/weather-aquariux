import React from "react";
import { convertTemperature } from "../utils/convertTemperature";

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  weather: {
    main: string;
    description: string;
  }[];
  main: {
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  // Add other properties as needed
}

type WeatherInfoType = {
  weatherData: WeatherData | null;
};

const WeatherInfo = ({ weatherData }: WeatherInfoType) => {
  const convertTempMin = weatherData && convertTemperature(weatherData.main.temp_min);
  const convertTempMax = weatherData && convertTemperature(weatherData.main.temp_max);

  return (
    <div className=" bg-slate-200 w-full h-64 rounded-md">
      <div className="px-10 ">
        {/* Display weather information here */}
        {weatherData && (
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
                Temperature: {convertTempMin} °C ≈ {" "}
                {convertTempMax} °C
              </p>
              <p>Humidity: {weatherData.main.humidity} %</p>
              <p>Time: </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherInfo;
