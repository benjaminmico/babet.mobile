/**
 * return rhe right sport emoji
 * @param {String} sport value of game's sport
 */
export const sportEmoji = sport => {
  switch (sport) {
    case 'football':
      return '⚽️'
    case 'tennis':
      return '🎾'
    case 'rugby':
      return '🏉'
    case 'basketball':
      return '🏀'
    default:
      return ' '
  }
}
