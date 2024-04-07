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
  timezone: number;
}
export type Nullable<T> = T | null;

export type WeatherInfoType = {
  weatherData: WeatherData | null;
  error: Nullable<string>;
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

export type HistoryListType = {
  historyData: HistoryDataType[] | null;
  setHistoryData: React.Dispatch<React.SetStateAction<HistoryDataType[] | null>>;
  loading: boolean;
  handleSearch: (name: string) => void;
};

export type HistoryDataType = {
  name: string,
  code: string,
  searchedAt: string,
}

export type ButtonType = {
  darkMode: boolean;
  onClick?: () => void;
  title: string;
};

export interface WeatherResponse {
  data: any;
  error: string | null;
}