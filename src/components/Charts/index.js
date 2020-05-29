import React, {useState} from 'react'
import {withTheme} from '@core/themeProvider'
import {Dimensions} from 'react-native'
import {Defs, LinearGradient as SVGLinearGradient, Stop} from 'react-native-svg'
import {LineChart} from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Dash from 'react-native-dash'
import LinearGradient from 'react-native-linear-gradient'
import {ChartsContainer, ChartLastItemContainer, ChartLastItemValue} from './index.styles'
import {currency} from '@utils/currency'

type Props = {
  // Area chart data
  data: [Number],
  // theme
  theme: Object,
}

const Charts = ({data, theme}: Props) => {
  // state of latest item
  const [yLastItemPos, setYLastItemPos] = useState(0)

  // last graph index item
  const lastIndex = data.length - 1

  // last graph item
  const lastItem = data[lastIndex]

  const windowWidth = Dimensions.get('window').width

  // get theme props
  const {
    key: keyTheme,
    colors: {
      palette: {line: backgroundColorLastItemValue},
      texts: {
        filters: {selected: colorLastItemValueText},
      },
    },
  } = theme

  // eslint-disable-next-line no-unused-vars
  const Decorator = ({x, y, data}) => {
    return data.map((value, index) => {
      if (index === lastIndex) {
        setYLastItemPos(y(value))
      }
      return null
    })
  }

  const Gradient = () => (
    <Defs key="gradient">
      <SVGLinearGradient id="gradient" x1="0" y="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#F7B500" />
        <Stop offset="50%" stopColor="#B620E0" />
        <Stop offset="100%" stopColor="#9D0D27" />
      </SVGLinearGradient>
    </Defs>
  )

  return (
    <>
      <ChartsContainer>
        <LineChart
          style={{width: windowWidth * 0.603, height: 80}}
          data={data}
          curve={shape.curveNatural}
          svg={{
            strokeWidth: 2.59,
            stroke: 'url(#gradient)',
          }}
          contentInset={{top: 10, bottom: 10, right: 6}}
        >
          <Decorator />
          <Gradient />
        </LineChart>
        <LinearGradient
          start={{x: -1.5, y: -1.5}}
          end={{x: 1.5, y: 1.5}}
          colors={['#F7B500', '#B620E0', '#9D0D27']}
          style={{
            position: 'absolute',
            top: yLastItemPos - 5,
            left: windowWidth * 0.603 - 11,
            width: 11,
            height: 11,
            borderRadius: 7.5,
            borderWidth: 1,
            backgroundColor: 'red',
            borderColor: '#D4D8D9',
          }}
        />
        <Dash
          dashThickness={0.86}
          dashLength={4}
          dashColor={backgroundColorLastItemValue}
          style={{
            position: 'absolute',
            zIndex: -1,
            right: 4.5,
            height: yLastItemPos,
            marginBottom: yLastItemPos,
            flexDirection: 'column',
          }}
        />
        <ChartLastItemContainer theme={keyTheme}>
          <ChartLastItemValue color={colorLastItemValueText}>{currency(lastItem)}</ChartLastItemValue>
        </ChartLastItemContainer>
      </ChartsContainer>
    </>
  )
}

export default withTheme(Charts)
