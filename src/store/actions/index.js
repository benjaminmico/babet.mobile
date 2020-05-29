import * as auth from './auth'
import * as bankrolls from './bankrolls'
import * as tickets from './tickets'
import * as stats from './stats'

export default {
  ...auth,
  ...bankrolls,
  ...tickets,
  ...stats,
}
