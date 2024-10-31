import config from "../config/config";

export const fetchWeatherByCity = async (city: string): Promise<any> => {
  const response = await fetch(
    `${config.apiBaseUrl}/weather?q=${city}&appid=${config.apiKey}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
};

export const fetchWeatherByLocation = async (
  lat: number,
  lon: number
): Promise<any> => {
  const response = await fetch(
    `${config.apiBaseUrl}/weather?lat=${lat}&lon=${lon}&appid=${config.apiKey}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Location not found");
  }

  return response.json();
};
