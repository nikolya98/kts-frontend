export const getDate = (date: string): string => {
  const newDate = new Date(date).toDateString();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, month, day, year] = newDate.split(" ");
  return `${day} ${month} ${year}`;
};
