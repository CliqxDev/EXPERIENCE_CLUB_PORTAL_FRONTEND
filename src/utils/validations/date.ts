import moment from 'moment';

moment.locale('pt-BR');
export const isDate = (value: string) =>
  moment(value, 'DD/MM/YYYY', true).isValid();

export const isPastDate = (value: string) =>
  moment(value, 'DD/MM/YYYY').isBefore(moment(), 'day');

export const minDateForBirthDate = (value: string) =>
  moment(value, 'DD/MM/YYYY').isAfter('01/01/1900', 'day');

export const isDateTime = (value: string) =>
  moment(value, 'DD/MM/YYYY LT', true).isValid();

export const isAfterMore2minutesDateTime = (value: string) => {
  const twoMinutesAgo = moment().add(2, 'minutes');
  const myDate = moment(value, 'DD/MM/YYYY H:mm:ss A');
  return myDate.isAfter(moment(twoMinutesAgo));
};
