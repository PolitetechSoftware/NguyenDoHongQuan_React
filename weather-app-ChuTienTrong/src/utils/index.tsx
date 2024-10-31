/**
 * Converts temperature between Celsius and Fahrenheit.
 * @param temp The temperature value to convert.
 * @param toUnit The unit to convert to ('C' for Celsius or 'F' for Fahrenheit).
 * @returns The converted temperature.
 */
export const convertTemperature = (temp: number, toUnit: "C" | "F"): number =>
  toUnit === "C" ? ((temp - 32) * 5) / 9 : (temp * 9) / 5 + 32;

/**
 *
 * @param val The string to capitalize the first letter of.
 * @returns The string with the first letter capitalized.
 */

export const capitalizeFirstLetter = (val: string) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};
