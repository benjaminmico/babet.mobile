import gql from 'graphql-tag'

/**
 * get user stats
 */
export const getUserStats = gql`
  query {
    stats {
      ticketsLength
      averageOdd {
        value
        previousValue
      }
      averageStake {
        value
        previousValue
      }
      balanceSheet {
        week {
          value {
            cumulativeBalance {
              x
              y
            }
            result {
              x
              y
            }
            value
          }
          previousValue {
            cumulativeBalance {
              x
              y
            }
            result {
              x
              y
            }
            value
          }
        }
        month {
          value {
            cumulativeBalance {
              x
              y
            }
            result {
              x
              y
            }
            value
          }
          previousValue {
            cumulativeBalance {
              x
              y
            }
            result {
              x
              y
            }
            value
          }
        }
        all {
          value {
            cumulativeBalance {
              x
              y
            }
            result {
              x
              y
            }
            value
          }
          previousValue {
            cumulativeBalance {
              x
              y
            }
            result {
              x
              y
            }
            value
          }
        }
      }
      shape {
        week {
          previousValue
          value
        }
        month {
          previousValue
          value
        }
        all {
          previousValue
          value
        }
      }
    }
  }
`
