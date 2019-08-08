import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/BackButtonStyle'
import { Images } from '../Themes'

export default class BackButton extends Component {
  // Prop type warnings
  // static propTypes = {
  //   navigation: PropTypes.object.isRequired
  // };

  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <Image source={Images.backButton} style={styles.headerIcon} />
    )
  }
}
