import gql from 'graphql-tag'

/**
 * get user stats
 */
export const getUserStats = gql`
  query {
    stats {
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
            cumulativeBalance
            result
            value
          }
          previousValue {
            cumulativeBalance
            result
            value
          }
        }
        month {
          value {
            cumulativeBalance
            result
            value
          }
          previousValue {
            cumulativeBalance
            result
            value
          }
        }
        all {
          value {
            cumulativeBalance
            result
            value
          }
          previousValue {
            cumulativeBalance
            result
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
