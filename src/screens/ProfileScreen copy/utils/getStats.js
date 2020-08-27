/**
 * Filtering balance by sections (week, mont, all) by default
 * @param {Object} balanceSheet from store
 * @param {String} filter label's filter
 * @returns {Number} balance sheet value
 */
export const getBalanceSheet = (balanceSheet, filter) => {
  if (balanceSheet) {
    const balanceSheetValue = balanceSheet[filter].value.value

    return balanceSheetValue
  }
  return 0
}

/**
 * Filtering graph user result by sections by sections (week, mont, all) by default
 * @param {Array} balanceSheet from store
 * @param {String} filter label's filter
 * @returns {Array} balance sheet value
 */
export const getResult = (balanceSheet, filter) => {
  if (balanceSheet) {
    const balanceSheetArray = balanceSheet[filter].value.result

    return balanceSheetArray
  }
  return []
}

/**
 * Return shape of user as a row ex : (/7
 * @param {Object} shape from store
 * @returns {Number} balance sheet value
 */
export const getShape = (shape, filter) => {
  if (shape) {
    console.log('shape', shape)
    let shapeArray = shape[filter].value
    shapeArray = shapeArray.length <= 7 ? shapeArray : shapeArray.slice(shapeArray.length - 7, shapeArray.length)
    const shapeWonLength = shapeArray.filter(result => result === 'won')?.length

    return {value: shapeWonLength, array: shapeArray}
  }
  return {value: 0, array: []}
}
