import React, { Component } from 'react'
import { FlatList, View} from 'react-native'
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import RestaurantActions, { RestaurantSelectors } from '../Redux/RestaurantRedux'
import RestaurantRow from '../Components/RestaurantRow'
import RestaurantDetails from '../Components/RestaurantDetails'
import RestaurantMap from '../Components/RestaurantMap'

import { Metrics } from'../Themes'
// Styles
import styles from './Styles/ListScreenStyle'

class ListScreen extends Component {
  state = {
    drawerOpen: false
  }
  handleViewRef = ref => this.view = ref;

  numColumns = Metrics.screenWidth > 480
    ? 2
    : 1;

  componentDidMount() {
    this.props.getRestaurants()
  }

  _closeDrawer = () => {
    this.view.fadeOutRight(800)
      .then(endState  => {
        this.setState({ drawerOpen: false})
      })
  }

  componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
    if(this.props.selectedId && !nextProps.selectedId) {
      this._closeDrawer()
    }
  }

  _openDrawer = () => {
    this.setState({
      drawerOpen: true
    })
  };



  _onPress = (id :string)  => {
    console.log('pressed')
    this.props.setSelectedRestaurantId(id)
    this._openDrawer()
  }

  _renderItem =  ({item}) => (
    <RestaurantRow
      name={item.name}
      category={item.category}
      imgSource={item.backgroundImageURL}
      id={item.clientId} onPress={this._onPress}
      numColumns={this.numColumns}
    />

  )

  _keyExtractor = (item, index) => item.clientId

  onMarkerClicked = e => {
    console.log(e.nativeEvent, 'logging')
    const {
      selectedId,
      setSelectedRestaurantId
    } = this.props

    if(selectedId !== e.nativeEvent.id) {
      setSelectedRestaurantId(e.nativeEvent.id)
    }
  }

  renderRestaurantDetails = () => {
    const {
      selectedRestaurant,
      restaurants
    } = this.props
      if (this.props.selectedRestaurant)  {
        const {
          name,
          category,
          location,
          contact

        } = this.props.selectedRestaurant
        return (
          <Animatable.View  iterationCount={1} ref={this.handleViewRef} animation={'slideInRight'}  style={styles.details}>
            <RestaurantMap numColumns={this.numColumns} restaurants={restaurants} selectedRestaurant={selectedRestaurant} onMarkerClicked={this.onMarkerClicked}/>
            <RestaurantDetails name={name} category={category} address={location && location.formattedAddress} number={contact && contact.formattedPhone} twitter={contact && contact.twitter}/>
          </Animatable.View>
        )
      }
      return null
    }


  render () {
    const { restaurants } = this.props
    const { drawerOpen } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          renderItem={this._renderItem}
          data={restaurants}
          keyExtractor={this._keyExtractor}
          horizontal={false}
          numColumns={this.numColumns}
          columnWrapperStyle={{ flexDirection: 'row', width: '100%'}}
        />
        { drawerOpen && this.renderRestaurantDetails()  }
      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: RestaurantSelectors.getRestaurants(state),
    selectedId: RestaurantSelectors.getSelectedRestaurantId(state),
    selectedRestaurant: RestaurantSelectors.getSelectedRestaurant(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRestaurants: () => dispatch(RestaurantActions.restaurantRequest()),
    setSelectedRestaurantId: id  => dispatch(RestaurantActions.setSelectedRestaurantId(id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)
