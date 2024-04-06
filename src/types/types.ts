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
  
export type WeatherInfoType = {
    weatherData: WeatherData | null;
    error: string | undefined;
    loading: boolean;
    darkMode: boolean;
  };

export type SearchbarType = {
  location: string;
  setLocation: (props: string) => void;
  handleSearch: (name: string) => void;
  handleClear: () => void;
  handleDarkMode?: () => void;
  darkMode: boolean;
};

export type HistoryDataType = {
  historyData: string[] | null;
  setHistoryData: React.Dispatch<React.SetStateAction<string[] | null>>;
  loading: boolean;
  handleSearch:(name: string) => void;
};

export type ButtonType = {
  darkMode: boolean;
  onClick?: () => void;
  title: string;
}

export interface WeatherResponse {
  data: any;
  error: string | null;
}