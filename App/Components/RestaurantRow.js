import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text,  Image, TouchableOpacity } from 'react-native'
import styles from './Styles/RestaurantRowStyle'
import LinearGradient from 'react-native-linear-gradient'
import {Colors} from "../Themes";

export default class RestaurantRow extends Component {
  // // Prop type warnings
  static propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    imgSource:PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
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
      imgSource,
      id,
      onPress
    } = this.props;
    return (
      <TouchableOpacity onPress={() => onPress(id)}>
        <LinearGradient  onError={err => console.log('error', err)} style={styles.container} start={{x:0, y:1}} end={{x:0, y:0}} colors={[Colors.panther, Colors.transparent]} locations={[0.1,0.2]}>
          <Image source={{uri: imgSource}}  style={[styles.backgroundImage, {paddingRight:12, paddingBottom: 6}]}/>
          <Text style={styles.sectionTitle}>{name}</Text>
          <Text style={[styles.sectionSubTitle, { marginTop: 6 }]}>{category}</Text>
        </LinearGradient>
      </TouchableOpacity>

    )
  }
}
