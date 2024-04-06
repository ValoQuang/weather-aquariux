import axios, { AxiosError } from "axios";

type WeatherData = any; // Define type for weather data as needed

export interface WeatherResponse {
  data: WeatherData | null;
  error: string | null;
}

export const fetchWeatherData = async (
  loc: string,
  id: string | undefined
): Promise<WeatherResponse> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=f052bde16f681ed8533ca7f58830b1de`
    );

    // Check if response status code is 404
    if (response.status === 404) {
      return { data: null, error: "City not found" };
    }

    const data = response.data;
    return { data, error: null };
  } catch (error) {
    // Handle AxiosError to access response status code
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 404) {
        return { data: null, error: "City not found" };
      }
    }
    // If error is not a 404 or is not an AxiosError, return a general error message
    return { data: null, error: "An error occurred" };
  }
};
