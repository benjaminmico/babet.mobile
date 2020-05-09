import 'intl'
import 'intl/locale-data/jsonp/en' // or any other locale you need
import 'intl/locale-data/jsonp/fr' // or any other locale you need

/**
 *
 * @param {*} number value to convert with currency
 * @returns value with currency
 */
export const currency = number => {
  Intl.NumberFormat('fr-FR')
  return Intl.NumberFormat('fr-fr', {style: 'currency', currency: 'EUR'}).format(number)
}
