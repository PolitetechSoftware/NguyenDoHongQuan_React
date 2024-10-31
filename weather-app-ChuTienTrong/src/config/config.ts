interface Config {
  apiKey: string;
  apiBaseUrl: string;
}

const config: Config = {
  apiKey: process.env.REACT_APP_OPENWEATHER_API_KEY || "",
  apiBaseUrl: "https://api.openweathermap.org/data/2.5",
};

export default config;
