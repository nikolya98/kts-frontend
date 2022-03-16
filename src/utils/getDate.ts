export const getDate = (date: string): string => {
  const newDate = new Date(date).toDateString();
  const [_, month, day, year] = newDate.split(" ");
  return `${day} ${month} ${year}`;
};
