import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text,  Image } from 'react-native'
import styles from './Styles/RestaurantRowStyle'

export default class RestaurantRow extends Component {
  // // Prop type warnings
  static propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.bool.isRequired,
    imgSource:PropTypes.string.isRequired
  };
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const {
      name,
      category,
      imgSource
    } = this.props;
    return (
      <View style={styles.container}>
        <Image source={imgSource} style={styles.backgroundImage}/>
        <Text style={styles.sectionTitle}>{name}</Text>
        <Text style={[styles.sectionSubTitle, { marginTop: 6 }]}>{category}</Text>
      </View>
    )
  }
}
