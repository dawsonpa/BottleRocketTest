import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/RestaurantDetailsStyle'

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
          <Text style={[styles.sectionTitle, { marginBottom: 6 }]}>{name}</Text>
          <Text style={styles.sectionSubTitle}>{category}</Text>
        </View>
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
        {number && <Text style={[styles.detailsText,  { marginHorizontal: 12, marginBottom: 26 }]}>{number}</Text>}
        {twitter && <Text style={{marginHorizontal:12}}>{`@${twitter}`}</Text>}
      </View>
    )
  }
}
