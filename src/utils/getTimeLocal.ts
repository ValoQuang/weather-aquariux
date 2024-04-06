export const getTimeLocal = (timestamp: number) => {
  return new Date(timestamp).toLocaleString();
};
