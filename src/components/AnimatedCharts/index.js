// @flow
import {withTheme} from '@core/themeProvider'
import {scaleLinear, scaleQuantile, scaleTime} from 'd3-scale'
import * as shape from 'd3-shape'
import React, {useEffect, useState} from 'react'
import {Animated, Dimensions, StyleSheet, TextInput, View} from 'react-native'
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg'
import * as path from 'svg-path-properties'
import {
  AnimatedChartsContainer,
  AnimatedChartsValueContainer,
  AnimatedChartsValueTextInput,
  AnimatedChartsCursor,
} from './index.styles'

const d3 = {
  shape,
}
const {width} = Dimensions.get('window')
const height = 162
const cursorRadius = 10

const AnimatedCharts = ({theme, scrollHeightContent, scrollYPos, scrollX, data}) => {
  // get theme props
  const {
    key: keyTheme,
    colors: {
      components: {backgroundContainer},
      texts: {text: textColor, description: descriptionColor},
      palette: {white: errorTextColor, error: errorBackgroundContainer},
    },
  } = theme

  const [maxValue, setMaxValue] = useState(null)
  const [minDate, setMinDate] = useState(0)
  const [maxDate, setMaxDate] = useState(1)

  //
  const scaleX = scaleTime().domain([minDate, maxDate]).range([0, width])
  const scaleY = scaleLinear().domain([0, maxValue]).range([height, 0])
  const scaleLabel = scaleQuantile()
    .domain(data.map(d => d.x))

    .range(data.map(d => d.y))

  const line = d3.shape
    .line()

    .x(d => scaleX(d.x))
    .y(d => scaleY(d.y))
    .curve(d3.shape.curveBasis)(data)

  const properties = path.svgPathProperties(line)
  const totalLength = properties.getTotalLength()

  const cursor = React.useRef()

  const label = React.useRef()

  const animatedValues = {
    x: new Animated.Value(0),
  }

  function update(top, left) {
    cursor.current.setNativeProps({
      top: top - cursorRadius,
      left: left - cursorRadius,
    })
    const text = scaleLabel(scaleX.invert(left))
    label.current.setNativeProps({text: `${text} €`})
  }

  useEffect(() => {
    setMaxValue(
      Math.max.apply(
        null,
        data.map(value => value.y),
      ),
    )
    setMinDate(
      Math.min.apply(
        null,
        data.map(value => value.x),
      ),
    )
    setMaxDate(
      Math.max.apply(
        null,
        data.map(value => value.x),
      ),
    )
    console.log('minDate', minDate, maxDate)

    const {x} = animatedValues
    x.addListener(({value}) =>
      requestAnimationFrame(() => {
        const {x: left, y: top} = properties.getPointAtLength(totalLength)
        update(top, left)
      }),
    )
    const {y: top, x: left} = properties.getPointAtLength(totalLength)
    update(top, left)
  }, [])

  useEffect(() => {
    if (properties && scrollYPos && totalLength && scrollHeightContent) {
      const {x: left, y: top} = properties.getPointAtLength(
        totalLength - (scrollYPos * (400 * 2)) / scrollHeightContent,
      )

      scrollX(left)
      update(top, left)
    }
  }, [scrollYPos])

  return (
    <AnimatedChartsContainer>
      <Svg
        {...{
          width,
          height: height * 2,
        }}
      >
        <Defs>
          <LinearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <Stop offset="0%" stopColor="white" />
          </LinearGradient>
        </Defs>
        <Path d={`${line}L ${width} ${height} L 0 ${height}`} fill="url(#gradient)" />
        <Path d={line} fill="transparent" stroke="#5100FF" strokeWidth={3} />
      </Svg>

      <View style={StyleSheet.absoluteFill}>
        <AnimatedChartsCursor ref={cursor}>
          <AnimatedChartsValueContainer backgroundColor={backgroundContainer} theme={keyTheme}>
            <AnimatedChartsValueTextInput underlineColorAndroid="transparent" ref={label} />
          </AnimatedChartsValueContainer>
        </AnimatedChartsCursor>
      </View>
    </AnimatedChartsContainer>
  )
}

export default withTheme(AnimatedCharts)
