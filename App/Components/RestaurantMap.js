import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

import styles from './Styles/RestaurantMapStyle'

export default class RestaurantMap extends PureComponent {
  // // Prop type warnings
  static propTypes = {
    restaurants: PropTypes.array.isRequired,
    selectedRestaurant: PropTypes.object.isRequired,
  }


  get geojson() {
    return this.props.restaurants.map(val =>  val.geojson)
  }


  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const { selectedRestaurant, restaurants } = this.props
    const initialRegion = {
      latitude: selectedRestaurant.location.lat,
      longitude: selectedRestaurant.location.lng,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001
    }
    return (
      <MapView initialRegion={initialRegion} provider={'google'} style={styles.container}>
        {
          this.props.restaurants.map((restaurant, ind) => {
            return (
              <Marker
                
                coordinate={{latitude: restaurant.location.lat, longitude: restaurant.location.lng}}
                title={restaurant.name}
                description={restaurant.category}
              />
              )
          })
        }
      </MapView>
    )
  }
}
