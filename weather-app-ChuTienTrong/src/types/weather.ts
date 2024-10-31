export interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
  }>;
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}
