import { useNotification } from "providers/NotificationContext";
import { useEffect, useState } from "react";
import { fetchCitiesByQuery } from "../services/cityService";
import { City } from "../types/city";

const useCitySearch = (query: string, minTemp: number, maxTemp: number) => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { showNotification } = useNotification(); // Use the notification context

  const fetchCities = async () => {
    setLoading(true);
    setError(null);
    try {
      const citiesList = await fetchCitiesByQuery(query);
      // Filter cities based on min and max temperature
      const filteredCities = citiesList.list.filter((city: City) => {
        const temp = city.main.temp;
        return temp >= minTemp && temp <= maxTemp;
      });
      setCities(filteredCities);
    } catch (err: any) {
      setError(err.message);
      showNotification(err.message, "error"); // Show error notification
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query) {
      setCities([]);
      return;
    }
    fetchCities();
  }, [query, minTemp, maxTemp]);

  return { cities, loading, error };
};
export default useCitySearch;
