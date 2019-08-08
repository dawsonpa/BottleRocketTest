import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/BackButtonStyle'
import { Images } from '../Themes'

export default class HeaderIcon extends Component {
  // Prop type warnings
  static propTypes = {
    imgSource:PropTypes.string.isRequired,
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <Image source={this.props.imgSource} style={styles.headerIcon} />
    )
  }
}
