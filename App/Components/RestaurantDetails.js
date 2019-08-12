import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native'
import styles from './Styles/RestaurantDetailsStyle'
import {Metrics} from "../Themes";

export default class RestaurantDetails extends PureComponent {
  // // Prop type warnings
  static propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    address: PropTypes.array,
    number: PropTypes.string,
    twitter: PropTypes.string
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
          <Text style={styles.sectionTitle}>{name}</Text>
          <Text style={styles.sectionSubTitle}>{category}</Text>
        </View>
        <View style={styles.detailsContainer}>
          {address && address.length && <View style={styles.addressContainer}>
            {
              address.map((line, ind) => {
                if(ind !== 2) {
                  return (<Text key={ind} style={styles.detailsText}>{line}</Text>)
                }
              })
            }
          </View>
          }
          {number && <Text style={[styles.detailsText,  { marginBottom: Metrics.doubleBaseMargin }]}>{number}</Text>}
          {twitter && <Text style={styles.detailsText}>{`@${twitter}`}</Text>}
        </View>
      </View>
    )
  }
}
