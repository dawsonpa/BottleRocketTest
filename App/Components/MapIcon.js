import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/MapIconStyle'

export default class MapIcon extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <Text>MapIcon Component</Text>
      </View>
    )
  }
}
