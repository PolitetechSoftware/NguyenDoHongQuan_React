export interface CityData {
  message: string;
  cod: string;
  count: number;
  list: City[];
}

export interface City {
  id: number;
  name: string;
  coord: CityCoord;
  main: CityMain;
  dt: number;
  wind: CityWind;
  sys: CitySys;
  rain: CityRain;
  snow: any;
  clouds: CityClouds;
  weather: CityWeather[];
}

export interface CityCoord {
  lat: number;
  lon: number;
}

export interface CityMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface CityWind {
  speed: number;
  deg: number;
}

export interface CitySys {
  country: string;
}

export interface CityRain {
  "1h": number;
}

export interface CityClouds {
  all: number;
}

export interface CityWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
