/**
 *
 * @param {*} number value to convert with currency
 * @returns value with currency
 */
export const currency = number => {
  return new Intl.NumberFormat('fr-fr', {style: 'currency', currency: 'EUR'}).format(number)
}
