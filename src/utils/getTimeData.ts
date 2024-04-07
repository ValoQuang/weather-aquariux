export const getTimeData = (timezoneOffsetSeconds: number) => {
  // Obtain the current UTC time
  const currentUTCTime = new Date();
  
  // Apply the timezone offset to obtain local time
  const localTime = new Date(
    currentUTCTime.getTime() + (timezoneOffsetSeconds + currentUTCTime.getTimezoneOffset() * 60) * 1000
  );
  // Format local time as a string
  const localTimeString = localTime.toLocaleString();
  return localTimeString;
};
