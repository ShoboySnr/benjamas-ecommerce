import { CURRENCIES } from './constants';

export const appendCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat(
    CURRENCIES[currency.toLowerCase() as 'usd'].locale,
    {
      style: 'currency',
      currency: currency.toLocaleUpperCase(),
    },
  ).format(amount);
}