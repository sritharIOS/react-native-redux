import {format} from 'date-fns';

export const getTodayDate = () => {
  const today = format(new Date(), 'MM-dd-yyyy');
  return today;
};

export const getTime = dateString => {
  return format(new Date(dateString), 'hh:mm:ss');
};

export const getDate = dateString => {
  return format(new Date(dateString), 'MM-dd-yyyy');
};
