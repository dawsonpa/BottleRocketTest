import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { View, Text,  Image, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './Styles/RestaurantRowStyle'
import LinearGradient from 'react-native-linear-gradient'
import {Colors} from "../Themes";

export default class RestaurantRow extends PureComponent {
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
      <TouchableOpacity  onPress={() => onPress(id)}>
        <ImageBackground source={{uri: imgSource}} style={styles.container}>
          <LinearGradient style={styles.gradient}   onError={err => console.log('error', err)}  start={{x:0, y:1}} end={{x:0, y:0}} colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.7)", "rgba(0,0,0,0.6)","rgba(0,0,0,0.5)","rgba(0,0,0,0.4)","rgba(0,0,0,0.3)","rgba(0,0,0,0.2)", "rgba(0,0,0,0.1)","rgba(0,0,0,0)"]} locations={[0.05,  0.1, 0.15, 0.2, 0.25, 0.3,  0.35, 0.4, 1]}>
            <Text style={styles.sectionTitle}>{name}</Text>
            <Text style={[styles.sectionSubTitle, { marginTop: 6 }]}>{category}</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>

    )
  }
}
