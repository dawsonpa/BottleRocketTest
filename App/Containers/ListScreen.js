import React, { Component } from 'react'
import { FlatList, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import RestaurantActions, { RestaurantSelectors } from '../Redux/RestaurantRedux'
import RestaurantRow from '../Components/RestaurantRow'

import { Metrics } from'../Themes'
// Styles
import styles from './Styles/ListScreenStyle'

class ListScreen extends Component {
  numColumns = Metrics.screenWidth > 480
    ? 2
    : 1;

  componentDidMount() {
    this.props.getRestaurants()
  }

  _onPress = (id :string)  => {
    this.props.setSelectedRestaurantId(id)
    this.props.nav.openDrawer()
  }

  _renderItem =  ({item}) => (
    <RestaurantRow
      name={item.name}
      category={item.category}
      imgSource={item.backgroundImageURL}
      id={item.clientId} onPress={this._onPress}/>
  )

  _keyExtractor = (item, index) => item.clientId

  render () {
    const { restaurants } = this.props
    console.log(restaurants, 'hello   are you sure?')
    return (
      <FlatList
        renderItem={this._renderItem}
        data={restaurants}
        style={styles.container}
        keyExtractor={this._keyExtractor}
        horizontal={false}
        numColumns={this.numColumns}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: RestaurantSelectors.getRestaurants(state),
    nav: state.nav
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRestaurants: () => dispatch(RestaurantActions.restaurantRequest()),
    setSelectedRestaurantId: id  => dispatch(RestaurantActions.setSelectedRestaurantId(id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)
