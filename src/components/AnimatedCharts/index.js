// @flow
import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  SafeAreaView,
  Animated,
  TextInput,
  Text,
  StatusBar,
} from 'react-native'
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg'

import * as shape from 'd3-shape'

import * as path from 'svg-path-properties'

import {scaleLinear, scaleTime, scaleQuantile} from 'd3-scale'

const d3 = {
  shape,
}

class AnimatedCharts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {x: new Animated.Value(0), text: ' '}
  }

  cursor = React.createRef()

  label = React.createRef()

  data() {
    const {data} = this.props
    return data
  }

  width() {
    return Dimensions.get('window').width
  }

  height() {
    return 162
  }

  cursorRadius() {
    return 8
  }

  scrollXPos() {
    const {scrollXPos} = this.props
    return scrollXPos
  }

  scrollYPos() {
    const {scrollYPos} = this.props
    return scrollYPos
  }

  scrollHeightContent() {
    const {scrollHeightContent} = this.props
    return scrollHeightContent
  }

  scaleX() {
    return scaleTime()
      .domain([new Date(2018, 9, 1), new Date(2018, 10, 5)])
      .range([0, this.width() * 2])
  }

  scaleY() {
    return scaleLinear()
      .domain([0, 300])
      .range([this.height() - 10, 10])
  }

  scaleLabel() {
    return scaleQuantile()
      .domain(this.data().map(d => d.x))
      .range(this.data().map(d => d.y))
  }

  line() {
    return d3.shape
      .line()
      .x(d => this.scaleX()(d.x))
      .y(d => this.scaleY()(d.y))
      .curve(d3.shape.curveBasis)(this.data())
  }

  properties() {
    return path?.svgPathProperties(this.line())
  }

  totalLength() {
    return this.properties()?.getTotalLength()
  }

  update(top, left) {
    this.cursor.current.setNativeProps({top: top - this.cursorRadius(), left: left - this.cursorRadius()})
    const text = this.scaleLabel()(this.scaleX().invert(left))
    this.label.current.setNativeProps({text: `${text} €`})
  }

  componentDidMount() {
    const {x} = this.state

    x.addListener(({value}) =>
      requestAnimationFrame(() => {
        const {x: left, y: top} = this.properties()?.getPointAtLength(this.totalLength() - value)
        this.update(top, left)
      }),
    )
    const {y: top, x: left} = this.properties()?.getPointAtLength(this.totalLength())
    this.update(top, left)
  }

  componentDidUpdate(prevProps) {
    const {x} = this.state
    requestAnimationFrame(() => {
      const {x: left, y: top} = this.properties()?.getPointAtLength(
        this.props.scrollYPos * (this.totalLength() / this.props.scrollHeightContent),
      )
      this.props.scrollX(left)
      this.update(top, left)
    })
  }

  render() {
    const {x} = this.state

    const styles = StyleSheet.create({
      root: {
        flex: 1,
        justifyContent: 'center',
      },
      container: {
        width: this.width() * 2,
        height: 400,
      },
      label: {
        position: 'absolute',
        top: -20,
        width: 200,
      },
      cursor: {
        borderWidth: 1.86,
        borderColor: '#5100FF',
        backgroundColor: 'white',
        width: this.cursorRadius() * 2,
        height: this.cursorRadius() * 2,
        borderRadius: this.cursorRadius(),
      },
    })

    return (
      <View style={styles.container}>
        <Svg {...{width: this.width() * 2, height: this.height()}}>
          <Defs>
            <LinearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
              <Stop offset="0%" stopColor="#E3D5FE" />
              <Stop offset="80%" stopColor="#F5F0FF" />
              <Stop offset="100%" stopColor="#feffff" />
            </LinearGradient>
          </Defs>
          <Path d={`${this.line()}L ${this.width() * 2} ${this.height()} L 0 ${this.height()}`} fill="url(#gradient)" />
          <Path d={this.line()} fill="transparent" stroke="#5100FF" strokeWidth={3} />
        </Svg>
        <View style={StyleSheet.absoluteFill}></View>
        <View style={StyleSheet.absoluteFill}>
          <View ref={this.cursor} style={styles.cursor}>
            <Animated.View style={styles.label}>
              <TextInput underlineColorAndroid="transparent" ref={this.label} />
            </Animated.View>
          </View>
        </View>
        {/* <Animated.ScrollView
          style={StyleSheet.absoluteFill}
          contentContainerStyle={{width: this.totalLength() * 2}}
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
        /> */}
      </View>
    )
  }
}

export default AnimatedCharts
