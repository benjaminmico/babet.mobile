import * as auth from './auth'
import * as bankrolls from './bankrolls'
import * as tickets from './tickets'

export default {
  ...auth,
  ...bankrolls,
  ...tickets,
}
