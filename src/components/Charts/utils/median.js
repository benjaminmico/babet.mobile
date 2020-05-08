/**
 * get median of chart arrays to set last value absolute position
 * @param {[Number]} array values
 * @returns median based on array values
 */
export const median = values => {
  const arrayToFetch = values
  if (arrayToFetch.length === 0) return 0

  const half = Math.floor(arrayToFetch.length / 2)

  if (arrayToFetch.length % 2) return arrayToFetch[half]

  return (arrayToFetch[half - 1] + arrayToFetch[half]) / 2.0
}
