import config from "../config/config";
import { CityData } from "../types/city";

// Fetch list of cities based on a search query
export const fetchCitiesByQuery = async (query: string): Promise<CityData> => {
  const response = await fetch(
    `${config.apiBaseUrl}/find?q=${query}&lat=14.058324&lon=108.277199&units=metric&appid=${config.apiKey}`
  );
  if (!response.ok) {
    throw new Error("City is not found");
  }

  return await response.json();
};
