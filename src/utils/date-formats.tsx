export const getStartTime = (date: string): string => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

export const getEndTime = (dateDeparture: string, dateDuration: number) => {
  const hours = new Date(new Date(dateDeparture).getTime() + dateDuration * 60 * 1000).getHours();
  const minutes = new Date(new Date(dateDeparture).getTime() + dateDuration * 60 * 1000).getMinutes();
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

export const getTravelTime = (dateDuration: number) => {
  const hours = Math.floor(dateDuration / 60);
  const minutes = dateDuration % 60;
  return `${hours < 10 ? `0${hours}` : hours}ч ${minutes < 10 ? `0${minutes}` : minutes}м`;
};
