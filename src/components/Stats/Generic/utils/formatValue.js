import {currency} from '@utils/currency'

/**
 *
 * @param {Number} value to convert on the right expected type
 * @param {*} type enum => 'percentage', odd', 'currency' or 'ratio
 * @param {*} betsLength total number of bets
 * @returns value on the right expected type
 */
const formatValue = (value, type, betsLength) => {
  switch (type) {
    case 'percentage':
      return value > 0 ? `+${value}%` : `${value}%`
    case 'odd':
      return value?.toFixed(2)
    case 'currency':
      return currency(value)
    case 'ratio':
      return `${value}/${betsLength}`
    default:
      return value
  }
}

export default formatValue
