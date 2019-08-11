import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps';

import styles from './Styles/RestaurantMapStyle'
import {Colors, Fonts, Metrics} from "../Themes";

export default class RestaurantMap extends PureComponent {
  // // Prop type warnings
  static propTypes = {
    restaurants: PropTypes.array.isRequired,
    selectedRestaurant: PropTypes.object.isRequired,
    onMarkerClicked: PropTypes.func.isRequired
  }

  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  get region() {
    const { selectedRestaurant } = this.props

    return {
      latitude: selectedRestaurant.location.lat,
      longitude: selectedRestaurant.location.lng,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001
    }
  }

  render () {
    const { restaurants } = this.props

    return (
      <MapView region={this.region} provider={'google'} loadingEnabled loadingIndicatorColor={Colors.headerBackground} style={styles.container}>
        {
          restaurants.map((restaurant, ind) => {
            return (
              <Marker
                key={ind}
                coordinate={restaurant.latlng}
                title={restaurant.name}
                description={restaurant.category}
                pinColor={Colors.sectionTitleBackground}
                onPress={this.props.onMarkerClicked}
                identifier={restaurant.clientId}
              >
                <Callout style={{flexDirection: 'row'}}>
                  <Image source={{uri: restaurant.backgroundImageURL}} style={styles.thumbnail}/>
                  <View style={styles.detailsContainer}>
                    <Text style={[styles.detailsText, {fontFamily: Fonts.type.bold, marginBottom: 2}]} numberOfLines={1}>{restaurant.name}</Text>
                    <Text style={styles.detailsText} numberOfLines={1}>{restaurant.category}</Text>
                    {restaurant.location  && restaurant.location.address && <Text numberOfLines={1}  style={styles.detailsText}>{restaurant.location.address}</Text>}
                    {restaurant.contact && restaurant.contact.formattedPhone && <Text numberOfLines={1} style={styles.detailsText}>{restaurant.contact.formattedPhone}</Text>}
                  </View>
                </Callout>
              </Marker>
              )
          })
        }
      </MapView>
    )
  }
}
