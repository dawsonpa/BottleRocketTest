import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/RestaurantDetailsStyle'

export default class RestaurantDetails extends Component {
  // // Prop type warnings
  static propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    address: PropTypes.array(PropTypes.string).isRequired,
    number: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const {
      name,
      category,
      address,
      number,
      twitter
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.sectionTitleContainer}>
          <Text style={[styles.sectionTitle, { marginBottom: 6 }]}>{name}</Text>
          <Text style={styles.sectionSubTitle}>{category}</Text>
        </View>
        <View style={styles.addressContainer}>
         {
           address.map((line, ind) => {
             if(ind !== 2) {
               return (<Text style={[styles.detailsText, { marginBottom: 26 }]}>{line}</Text>)
             }
           })
         }
        </View>
        <Text style={[styles.detailsText,  { marginBottom: 26 }]}>{number}</Text>
        <Text>{`@${twitter}`}</Text>
      </View>
    )
  }
}
