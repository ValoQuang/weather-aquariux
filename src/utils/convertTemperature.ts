export const convertTemperature = (temp: number) => {
  let celsius = (temp - 273).toFixed(0);
  return celsius;
};
