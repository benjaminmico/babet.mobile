// @flow
import {scaleLinear, scaleQuantile, scaleTime} from 'd3-scale'
import * as shape from 'd3-shape'
import React, {useEffect} from 'react'
import {Animated, Dimensions, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native'
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg'
import * as path from 'svg-path-properties'

const d3 = {
  shape,
}
const width = Dimensions.get('window').width * 2
const height = 162
const cursorRadius = 10

const AnimatedCharts = ({scrollHeightContent, scrollYPos, scrollX, data}) => {
  const scaleX = scaleTime()
    .domain([new Date(2018, 8, 1), new Date(2018, 10, 2)])
    .range([0, width])
  const scaleY = scaleLinear().domain([0, 300]).range([height, 0])
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
    cursor.current.setNativeProps({top: top - cursorRadius, left: left - cursorRadius})
    const text = scaleLabel(scaleX.invert(left))
    console.log('tsext', text)
    label.current.setNativeProps({text: `${text} €`})
  }

  useEffect(() => {
    const {x} = animatedValues
    x.addListener(({value}) =>
      requestAnimationFrame(() => {
        const {x: left, y: top} = properties.getPointAtLength(totalLength - value)
        update(top, left)
      }),
    )
    const {y: top, x: left} = properties.getPointAtLength(totalLength)
    update(top, left)
  }, [])

  useEffect(() => {
    if (properties)
      requestAnimationFrame(() => {
        const {x: left, y: top} = properties.getPointAtLength((scrollYPos * totalLength) / scrollHeightContent)

        scrollX(left)
        update(top, left)
      })
  }, [scrollYPos])

  const {x} = animatedValues

  return (
    <View style={styles.container}>
      <Svg {...{width, height: height * 2}}>
        <Defs>
          <LinearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <Stop offset="0%" stopColor="white" />
          </LinearGradient>
        </Defs>
        <Path d={`${line}L ${width} ${height} L 0 ${height}`} fill="url(#gradient)" />
        <Path d={line} fill="transparent" stroke="#5100FF" strokeWidth={3} />
      </Svg>

      <View style={StyleSheet.absoluteFill}>
        <View ref={cursor} style={styles.cursor}>
          <View style={styles.label}>
            <TextInput underlineColorAndroid="transparent" ref={label} />
          </View>
        </View>
      </View>
      <Animated.ScrollView
        style={StyleSheet.absoluteFill}
        contentContainerStyle={{width: totalLength * 2}}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {x},
              },
            },
          ],
          {useNativeDriver: true},
        )}
        horizontal
      />
      <TouchableOpacity
        style={{width: 50, height: 50, backgroundColor: 'blue'}}
        onPress={() => {
          requestAnimationFrame(() => {
            const {x: left, y: top} = properties.getPointAtLength(totalLength * (9 / data.length))

            scrollX(left)
            update(top, left)
          })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width * 2,
    height: '100%',
  },
  label: {
    position: 'absolute',
    top: -20,
    width: 200,
  },
  cursor: {
    borderWidth: 3,
    borderColor: '#5100FF',
    backgroundColor: 'white',
    width: 20,
    height: 20,
    borderRadius: cursorRadius,
  },
})

export default AnimatedCharts
